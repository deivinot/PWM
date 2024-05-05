import {Component, Input} from '@angular/core';
import Item from "../interfases";
import User from "../interfases";
import {ItemsService} from "../services/items.service";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent {
  sections: string[] = ['Pujas Destacadas', 'Marcas', 'Última hora'];

  items: Item[]=[];
  users: User[]=[];
  @Input() title: string = '';

  @Input() categoria: string = "";
  constructor(private itemService: ItemsService) {
    // No es necesario inicializar las propiedades aquí
  }

  ngOnInit() {

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
      if (espacio) {
        const imagen = document.createElement('img');
        imagen.src = this.items[r].imagen;
        espacio.appendChild(imagen);

        const nuevoDiv = document.createElement('div');
        nuevoDiv.className = 'texto';
        nuevoDiv.innerHTML = this.items[r].nombre + "<br>Puja Actual: " + this.items[r].precio + "€<br>Fecha de Finalización: " + this.items[r].fecha;
        espacio.appendChild(nuevoDiv);

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
    const tamañoLista = this.items.length;
    return Math.floor(Math.random() * tamañoLista);
  }
}
