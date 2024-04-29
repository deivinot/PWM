import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FoodListComponent } from './food-list/food-list.component';
import { FoodItemComponent } from './food-item/food-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
