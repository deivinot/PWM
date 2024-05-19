import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import Item from "../interfaces/interface";
import User from "../interfaces/interface";
import {addDoc, collection} from "@angular/fire/firestore";
import {map, Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userCollection: AngularFirestoreCollection<User>;

  constructor(private afAuth: AngularFireAuth , private afs: AngularFirestore) {
    this.userCollection = afs.collection<User>("user");

  }

  async loginService(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      // Si el inicio de sesión es exitoso, redirige al usuario a la página de inicio


      //this.router.navigate(['/']);

      //return result;
    } catch (error) {
      // Si hay un error, imprímelo en la consola y devuelve el error
      console.error('Error al iniciar sesión:', error);
      alert("Se ha equivocado iniciando sesión");

      window.location.reload();
      //return error;
    }
  }
  async registerService(email: string, password: string, name: string) {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      // Si el inicio de sesión es exitoso, redirige al usuario a la página de inicio


      //this.router.navigate(['/']);

      //return result;

  }
  async singOut(){
    return await this.afAuth.signOut();

  }

  async getProfile(){

      return await this.afAuth.currentUser;
      // Si el inicio de sesión es exitoso, redirige al usuario a la página de inicio

  }



  addUser(item: User): Promise<void> {
    const id = this.afs.createId(); // Crear un ID único para el nuevo documento
    return this.afs.collection('user').doc(id).set(item);
  }





  // return this.itemsCollection.valueChanges({ idField: "id" });




}


