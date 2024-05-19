import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import User from "../../interfaces/interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  user?: User[];

  // email:any
  // password:any
  // contact:any

  constructor(private toastController: ToastController,private loadingController: LoadingController,private authService:AuthenticationService,private router: Router, public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [
        // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
        Validators.required,
      ]
      ],
    });
  }

  ngOnInit() {

  }

  async login() {

    // console.log(this.email + this.password);
    if (this.ionicForm.valid) {

      //  await  loading.dismiss();
      await this.authService.loginService(this.ionicForm.value.email, this.ionicForm.value.password).catch((err) => {

        console.log(err);
      })
      // @ts-ignore

      // @ts-ignore


      this.router.navigate(['/details', this.ionicForm.value.email]);

    } else {
      return console.log('Please provide all the required values!');
    }

  }
  get errorControl() {
    return this.ionicForm.controls;
  }


}
