import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private afAuth: AngularFireAuth ) { }

  async loginService(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      // Si el inicio de sesión es exitoso, redirige al usuario a la página de inicio


      //this.router.navigate(['/']);

      //return result;
    } catch (error) {
      // Si hay un error, imprímelo en la consola y devuelve el error
      console.error('Error al iniciar sesión:', error);
      alert("Se ha equivocado iniciando sesión");

      //return error;
    }
  }
  async registerService(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      // Si el inicio de sesión es exitoso, redirige al usuario a la página de inicio


      //this.router.navigate(['/']);

      //return result;
    } catch (error) {
      // Si hay un error, imprímelo en la consola y devuelve el error
      console.error('Error al registrarse:', error);
      alert("Se ha equivocado al registrarse");

      //return error;
    }
  }
  async singOut(){
    return await this.afAuth.signOut();


  }

  async getProfile(){

      return await this.afAuth.currentUser;
      // Si el inicio de sesión es exitoso, redirige al usuario a la página de inicio

  }


}


