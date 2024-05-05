import { Component } from '@angular/core';
import {AuthServiceService} from "../services/auth-service.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = ""; // Asignamos null como valor inicial
  password: string = '';
  confirmPassword: string = '';


  constructor(private authService: AuthServiceService) {

  }

  register() {
    // Verificar si las contraseñas coinciden
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Llamar al servicio de autenticación para registrar el usuario
    this.authService.registerService(this.email, this.password, this.firstName, this.lastName, this.phoneNumber);
    const User = {mail: this.email, name: this.firstName, lastName: this.lastName, phoneNumber: this.phoneNumber};
    this.authService.addUser(User);
  }



}
