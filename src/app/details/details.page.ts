import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../services/item.service";
import Item from "../../interfaces/interface";
import {ActivatedRoute} from "@angular/router";
import User from "../../interfaces/interface";
import {DatabaseService} from "../../services/database.service";


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  user?: User[];

  items : Item[] =[];


/*{
    nombre: "Citroën Picasso",
    descripcion: "Un coche familiar espacioso y confortable.",
    precio: 25000,
    imagen: "https://example.com/images/citroen-picasso.jpg",
    categoria: "Vehículos",
    fecha: "2024-05-19"
  }*/

  // @ts-ignore
  favorites: Item[] = [];
  constructor(    private itemService: ItemService, private route: ActivatedRoute,     private sqlite: DatabaseService,


  ) { }

  ngOnInit() {
    console.log("ngOnInit");
    this.getId();
    this.getItems();

  }
  readFavorites() {
    // Leemos los datos de la base de datos
    this.sqlite.read().then((items: Item[]) => {
      console.log("readFavorites");
      console.log(JSON.stringify(items));

      this.favorites = items;
      this.getItems();

    }).catch(err => {
      console.error(err);
    })
  }

  isFavorite(item:Item): boolean {
    let item_ =
      this.favorites.find(elem => elem.nombre === item.nombre);

    let favorite: boolean = !!item_;

    if(favorite) console.log("isFavorite");

    return favorite;
  }





  getItems(){
    this.itemService.getItems().subscribe((items) => {
      this.items = items;
    });
  }

  getId(): void {
    const id: string | null = this.route.snapshot.paramMap.get("correo");

    console.log(id);

    if (id) {

      this.itemService
        .getItemByEmail(id)
        .subscribe((id) => {
          this.user = id;

          console.log(this.user);


        });
    }
  }




}
