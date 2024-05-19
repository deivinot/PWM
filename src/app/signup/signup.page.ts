import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoadingController} from "@ionic/angular";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regForm: FormGroup | undefined;
  constructor(private formBuilder:FormBuilder, private loadingCtr: LoadingController, private authService: AuthenticationService) { }

  ngOnInit() {
    this.regForm= this.formBuilder.group({


      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]], // Asignamos null como valor inicial

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]

    })
  }

  async singUp(){
    const loading = await this.loadingCtr.create();
    await loading.present();
    if(this.regForm?.valid){
      /*if (password===confirmPassword){
        const user = await this.authService.registerService(email, password);

      }else{
        alert("Las contraseñas no coinciden");
      }*/
    }
  }


  getErrorControl(){
    return this.regForm?.controls;
  }
}
