import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoadingController} from "@ionic/angular";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup | undefined;

  constructor(private formBuilder:FormBuilder, private loadingCtr: LoadingController, private authService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm= this.formBuilder.group({


      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],


    })
  }


  async singUp(){
    const loading = await this.loadingCtr.create();
    await loading.present();
    if(this.loginForm?.valid){
      /*if (password===confirmPassword){
        const user = await this.authService.registerService(email, password);

      }else{
        alert("Las contraseñas no coinciden");
      }*/
    }
  }


  getErrorControl(){
    return this.loginForm?.controls;
  }

}
