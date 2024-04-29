import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

interface Item{
  name: string;
  description: string;
  price: number;
}
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  selectedProduct: any;

  items: Item[] = [
    {name:"platano", description: "platano de canarias", price: 2},
    {name:"manzana", description: "manzana roja", price: 4},
    {name:"bola de futbol", description: "balon del mundial de futbol", price: 3}
  ];
  //@Output() onSelected = new EventEmitter<any>();

  onSelectedProduct(product: Item){
    this.selectedProduct=product;
    console.log(product);

    //this.selectedProductName=product.name;
    //this.selectedProductDescription=product.description;
    /*this.selectedProduct.name = product.name;
    this.selectedProduct.description=product.description;
    this.selectedProduct.price=product.price;*/
  }
  receiveInformationFromChild(description: string) {
    console.log('Información recibida en el padre:', description);
    this.selectedProduct.description = description;
    // Aquí puedes manejar la información recibida del hijo
  }

}
