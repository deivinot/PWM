import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import User from "../interfases";
//import Item from "../interfases";
import {addDoc, collection, Firestore} from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private afAuth: AngularFireAuth, private router: Router, private firestore: Firestore) { }
  async loginService(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      // Si el inicio de sesión es exitoso, redirige al usuario a la página de inicio


      this.router.navigate(['/']);

      //return result;
    } catch (error) {
      // Si hay un error, imprímelo en la consola y devuelve el error
      console.error('Error al iniciar sesión:', error);
      alert("Se ha equivocado iniciando sesión");

      //return error;
    }
  }
  registerService(email: string, password: string, firstName: string, lastName: string, phoneNumber:string) {


    this.afAuth.createUserWithEmailAndPassword(email, password);
  }



  addUser(user: { lastName: string; phoneNumber: string; mail: string; name: string }) {
    const userRef = collection(this.firestore, 'user');
    addDoc(userRef, user);
    this.router.navigate(['']);
  }


}
