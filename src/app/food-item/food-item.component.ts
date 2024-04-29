import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent {
  @Input() selectedProduct: any;

  //@Output() descriptionChanged = new EventEmitter<string>();

  @Output() productSelected = new EventEmitter<any>();

  newDescription:string = "";

  /*onButtonClick() {
    this.productSelected.emit(this.item);
  }*/

  pasar(){
    console.log("pasar");
    console.log(this.selectedProduct.description);
    this.productSelected.emit(this.newDescription);
  }
 /* get description(): string {
    return this.selectedProduct ? this.selectedProduct.description : '';
  }*/
}
