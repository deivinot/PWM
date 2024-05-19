import {Inject, Injectable} from '@angular/core';
// @ts-ignore

import { Firestore} from '@angular/fire/firestore'; // Importa AngularFirestore
import { collection, collectionData } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import Item from "../interfaces/interface";
import {AngularFirestore,AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import User from "../interfaces/interface";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsCollection: AngularFirestoreCollection<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>("items");

  } // Usa AngularFirestore
  getItems(): Observable<Item[]> {
    //const itemRef = collection(this.firestore, 'items');
    return this.itemsCollection.valueChanges({ idField: "id" });
  }

  getItemByNombre(itemN: string) {
    return this.afs.collection<Item>('items', ref => ref.where('nombre', '==', itemN))
      .valueChanges({ idField: 'id' })
  }

  getItemByEmail(itemN: string) {
    return this.afs.collection<User>('user', ref => ref.where('mail', '==', itemN))
      .valueChanges({ idField: 'id' })
  }

  toggleFavorite(item: Item) {
    //animal.favorite = !animal.favorite;
    this.afs.doc<Item>(`details_item/:nombre/${item.nombre}`).update(item);
  }
}
