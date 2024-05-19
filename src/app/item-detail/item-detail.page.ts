import { Component, OnInit } from '@angular/core';
import Item from "../../interfaces/interface";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../services/item.service";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  item?: Item;
  favorite = false;
  favorites: Item[] = [];

  constructor(private route: ActivatedRoute,
              private itemService: ItemService,
              private sqlite: DatabaseService
              ) { }

  ngOnInit() {
    this.getItem();
  }


  getItem(): void {
    const id: string | null = this.route.snapshot.paramMap.get("nombre");

    if (id) {
      this.itemService
        .getItemByNombre(id)
        // @ts-ignore
        .subscribe((id0:Item) => {
          // @ts-ignore
          this.item = id0[0];

          console.log(this.item);


        });
    }
  }
  readFavorites() {
    // Leemos los datos de la base de datos
    this.sqlite.read().then((item: Item[]) => {
      console.log("readFavorites");
      console.log(JSON.stringify(item));

      this.favorites = item;
      //this.getAnimal();

    }).catch((err: any) => {
      console.error(err);
    })
  }


  createFavorite() {
    // Creamos un elemento en la base de datos
    // @ts-ignore
    this.sqlite.create(this.item.nombre)
      .then((changes: any) => {
        console.log(changes);
        console.log("createFavorite");

        this.readFavorites(); // Volvemos a leer

      }).catch((err: any) => {
      console.error(err);
    })
  }
  deleteFavorite() {
    // Borramos el elemento

    // @ts-ignore
    console.log(this.item.nombre);
    // @ts-ignore
    this.sqlite.delete(this.item.nombre)
      .then((changes: any) => {
        console.log(changes);
        console.log("deleteFavorite");

        this.readFavorites(); // Volvemos a leer

      }).catch((err: any) => {
      console.error(err);
    })
  }


  toggleFavorite(): void {
    if (this.item) {
      //this.item.favorite = this.favorite;
      //this.itemService.toggleFavorite(this.item);

      if(this.favorite) this.createFavorite() /*console.log(this.favorite)*/;
      else this.deleteFavorite() /*console.log("no")*/;

    }
  }
}
