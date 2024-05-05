import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, Firestore, query, where} from "@angular/fire/firestore";
import Item from "../interfases";
import {map, Observable, of, switchMap} from "rxjs";
import User from '../interfases';
import Marca from "../interfases";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private firestore: Firestore) {
  }

  addItem(item: Item) {
    const itemRef = collection(this.firestore, 'items');
    return addDoc(itemRef, item);
  }

  getItems(): Observable<Item[]> {
    const itemRef = collection(this.firestore, 'items');
    return collectionData(itemRef, {idField: 'id'}) as Observable<Item[]>;
  }

  getUsers(): Observable<User[]> {
    const itemRef = collection(this.firestore, 'user');
    return collectionData(itemRef, {idField: 'id'}) as Observable<Item[]>;
  }
  getMarcas(): Observable<Marca[]> {
    const itemRef = collection(this.firestore, 'Marcas');
    return collectionData(itemRef, {idField: 'id'}) as Observable<Marca[]>;
  }

  getItemsByCategory(categoria: string): Observable<any[]> {
    const itemRef = collection(this.firestore, 'items')
    const q = query(itemRef, where('categoria', '==', categoria));
    return collectionData(q, {idField: 'id'}) as Observable<Item[]>;
    //return this.firestore.collection('items', ref => ref.where('categoria', '==', categoria))
    // .valueChanges({ idField: 'id' });
  }



}
