import { Component } from '@angular/core';
import {ItemsService} from "../services/items.service";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../app.component.css', './main.component.css']
})

export class MainComponent {
  itemForm: FormGroup;
  sections: string[] = ['Pujas Destacadas', 'Marcas', 'Última hora'];

  constructor(private itemservice: ItemsService){
    this.itemForm = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl(),
      imagen: new FormControl(),
      categoria: new FormControl(),
      fecha: new FormControl()
    })
  }




  onSubmit(){
    console.log(this.itemForm.value);
    this.itemservice.addItem(this.itemForm.value);
  }
  addSection(num:number){

    //this.itemservice.getItem(num);

  }
}
