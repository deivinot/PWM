import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Device} from "@capacitor/device";
import {CapacitorSQLite, capSQLiteChanges, capSQLiteValues, JsonSQLite,} from "@capacitor-community/sqlite";
import {Preferences} from "@capacitor/preferences";
import Item from "../interfaces/interface";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  // Atributos

  // Observable para comprobar si la base de datos esta lista
  public dbReady: BehaviorSubject<boolean>;
  // Indica si estamos en web
  public isWeb: boolean;
  // Indica si estamos en IOS
  public isIOS: boolean;
  // Nombre de la base de datos
  public dbName: string;

  constructor(
    private http: HttpClient
  ) {
    this.dbReady = new BehaviorSubject(false);
    this.isWeb = false;
    this.isIOS = false;
    this.dbName = '';
  }

  async init() {

    const info = await Device.getInfo();
    // CapacitorSQLite no tiene disponible el metodo requestPermissions
    // pero si existe y es llamable
    const sqlite = CapacitorSQLite as any;

    // Si estamos en android, pedimos permiso
    if (info.platform == 'android') {
      try {
        await sqlite.requestPermissions();
      } catch (error) {
        console.error("Esta app necesita permisos para funcionar")
      }

      // Si estamos en web, iniciamos la web store
    } else if (info.platform == 'web') {
      this.isWeb = true;
      await sqlite.initWebStore();

    } else if (info.platform == 'ios') {
      this.isIOS = true;
    }

    // Arrancamos la base de datos
    this.setupDatabase();

  }

  async setupDatabase() {

    // Obtenemos si ya hemos creado la base de datos
    const dbSetup = await Preferences.get({key: 'first_setup'});
    // Sino la hemos creado, descargamos y creamos la base de datos
    if (dbSetup.value) {

      // Nos volvemos a conectar
      this.dbName = await this.getDbName();
      await CapacitorSQLite.createConnection({database: this.dbName});
      await CapacitorSQLite.open({database: this.dbName});
      this.dbReady.next(true);
    }


  }



  async getDbName() {

    if (!this.dbName) {
      const dbname = await Preferences.get({key: 'db_name'})
      if (dbname.value) {
        this.dbName = dbname.value
      }
    }
    console.log(this.dbName);
    return this.dbName;
  }

  async create(animal: Item) {
    // Sentencia para insertar un registro
    let sql =
      'insert into items(nombre, descripcion, precio, imagen, categoria, fecha) VALUES(?, ?, ?, ?, ?, ?)';
    // Obtengo la base de datos
    const dbName = await this.getDbName();

    // Ejecutamos la sentencia
    return CapacitorSQLite.executeSet({
      database: dbName,
      set: [
        {
          statement: sql,
          values: [
            animal.nombre,
            animal.descripcion,
            animal.precio,
            animal.imagen,
            animal.categoria,
            animal.fecha

          ]
        }
      ]
    }).then((changes: capSQLiteChanges) => {

      // Si es web, debemos guardar el cambio en la webstore manualmente
      if (this.isWeb) {
        CapacitorSQLite.saveToStore({database: dbName});
      }
      return changes;
    }).catch(err => Promise.reject(err))
  }

  async read() {
    // Sentencia para leer todos los registros
    let sql = 'SELECT * FROM items';
    // Obtengo la base de datos
    const dbName = await this.getDbName();
    console.log(CapacitorSQLite.query({
      database: dbName,
      statement: sql,
      values: [] // necesario para android
    }));
    // Ejecutamos la sentencia
    return CapacitorSQLite.query({
      database: dbName,
      statement: sql,
      values: [] // necesario para android
    }).then((response: capSQLiteValues) => {
      let animals: Item[] = [];

      // Si es IOS y hay datos, elimino la primera fila
      // Esto se debe a que la primera fila es informacion de las tablas
      // @ts-ignore
      if (this.isIOS && response.values.length > 0) {

        // @ts-ignore
        response.values.shift();
      }

      // recorremos los datos

      // @ts-ignore
      for (let index = 0; index < response.values.length; index++) {

        // @ts-ignore
        const animal = response.values[index];
        animals.push(animal);
      }
      return animals;

    }).catch(err => Promise.reject(err))
  }


  async delete(id: string) {
    // Sentencia para eliminar un registro
    let sql = 'DELETE FROM items WHERE nombre={{id}}';
    // Obtengo la base de datos
    const dbName = await this.getDbName();

    // Ejecutamos la sentencia
    return CapacitorSQLite.executeSet({
      database: dbName,
      set: [
        {
          statement: sql,
          values: [
            id
          ]
        }
      ]
    }).then((changes: capSQLiteChanges) => {

      // Si es web, debemos guardar el cambio en la webstore manualmente
      if (this.isWeb) {
        CapacitorSQLite.saveToStore({database: dbName});
      }
      return changes;
    }).catch(err => Promise.reject(err))
  }


}
