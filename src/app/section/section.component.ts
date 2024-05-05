import {Component, Input} from '@angular/core';
import Item from "../interfases";
import User from "../interfases";
import Marca from "../interfases";
import {ItemsService} from "../services/items.service";

//import {UsersService} from "../services/users.service";
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'

})
export class SectionComponent {
  num:number[]=[];
  marcas:Marca[]=[];
  items: Item[]=[];
  users: User[]=[];
  @Input() title: string = '';

  constructor(private itemService: ItemsService) {
    // No es necesario inicializar las propiedades aquí
  }

  ngOnInit() {
    this.itemService.getMarcas().subscribe(allItems => {
      this.marcas = allItems;

    });

    this.itemService.getItems().subscribe(allItems => {
      this.items = allItems; // Asignar los elementos devueltos al array this.items
      console.log(this.items);
      this.añadir('espacio1_'+this.title);
      this.añadir('espacio2_'+this.title);
      this.añadir('espacio3_'+this.title);
    });

  }
  añadir(idEspacio: string) {
    const r = this.rand();
    const espacio = document.getElementById(idEspacio);

    if(this.title=="Marcas"){
      console.log(this.marcas[r]);
      if (espacio) {
        const imagen = document.createElement('img');
        imagen.src = this.marcas[r].imagen;
        espacio.appendChild(imagen);



      }
    }
    else{

      if (espacio) {

        const imagen = document.createElement('img');
        imagen.src = this.items[r].imagen;
        espacio.appendChild(imagen);

        const nuevoDiv = document.createElement('div');
        nuevoDiv.className = 'texto';
        console.log(this.items[r].nombre);
        nuevoDiv.innerHTML = this.items[r].nombre + "<br>Puja Actual: " + this.items[r].precio + "€<br>Fecha de Finalización: " + this.items[r].fecha;
        espacio.appendChild(nuevoDiv);

      }
    }
  }
  rand(): number {
    const tamañoLista = this.marcas.length;
    let a: number;

    do {
      a = Math.floor(Math.random() * tamañoLista);
    } while (this.num.includes(a));

    this.num.unshift(a);

    return a;
  }


}
