import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, Firestore, query, where} from "@angular/fire/firestore";
import Item from "../interfases";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private firestore: Firestore) { }

  addItem(item:Item){
  const itemRef=collection(this.firestore, 'items');
  return addDoc(itemRef,item);
  }
  getItems(): Observable<Item[]>{
    const itemRef = collection(this.firestore, 'items');
    return collectionData(itemRef, {idField: 'id'}) as Observable<Item[]>;
  }

  getItemsByCategory(categoria: string): Observable<any[]> {
    const itemRef = collection(this.firestore, 'items')
    const q = query(itemRef, where('categoria', '==', categoria));
    return collectionData(q, {idField: 'id'}) as Observable<Item[]>;
    //return this.firestore.collection('items', ref => ref.where('categoria', '==', categoria))
     // .valueChanges({ idField: 'id' });
  }
}
