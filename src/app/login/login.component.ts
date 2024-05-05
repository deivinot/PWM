import { Component, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() mail: string = '';
  @Input() password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  login() {
    console.log(this.mail);
    this.afAuth.signInWithEmailAndPassword(this.mail, this.password)
      .then(() => {
        console.log('Inicio de sesión exitoso');
        // Aquí podrías redirigir al usuario a la página de inicio o realizar otras acciones necesarias
        this.router.navigate(['/inicio']); // Por ejemplo, redirigir a la página de inicio
      })
      .catch(error => {
        console.log('Error al iniciar sesión:', error.message);
        // Aquí podrías mostrar un mensaje de error al usuario
      });
  }

  register() {
    // Lógica para manejar el registro de usuario
  }
}
