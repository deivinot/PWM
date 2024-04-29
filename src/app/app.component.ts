import { Component } from '@angular/core';

interface Item {
  name: string;
  completed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Proyecto";
  /*items: Item[] = [];
  newItemName: string = '';

  addItem() {
    const newItem: Item = {name: this.newItemName, completed: false};
    this.items.push(newItem);
    this.newItemName = '';
  }

  completeItem(item: Item) {
    item.completed = true;
  }

  deleteItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }*/

}
