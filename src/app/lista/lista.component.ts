import { Component } from '@angular/core';
import {ItemsService} from "../services/items.service";
import Item from "../interfases";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  items: Item[];
  constructor(private itemService:ItemsService) {
    this.items=[]
  }

  ngOnInit(){
    this.itemService.getItemsByCategory("Automoción").subscribe(items =>{
      console.log(items);
    })
  }

}
