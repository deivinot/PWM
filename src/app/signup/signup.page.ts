import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import {AuthenticationService} from "../../services/authentication.service";
import User from "../../interfaces/interface";
import {collection} from "@angular/fire/firestore";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  ionicForm: FormGroup;

  constructor(private toastController: ToastController,private loadingController: LoadingController,private authService:AuthenticationService,private router: Router, public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      firstName:['',
        [Validators.required]
      ],
      LastName:['',
        [Validators.required]
      ],
      contact:['',
        [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(9),
          // Validators.min(10)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [
        Validators.required,
        Validators.pattern("^[a-z]*$")
        //Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ],
      ],
    });
  }



  ngOnInit() {
    // this.signUP()

  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  // async signUpWithGoogle(){
  //   const loading = await this.loadingController.create();
  //   // await loading.present();

  //   const user = await this.authService.GoogleAuth().then((re)=>{
  //     console.log(re);

  //     // this.router.navigate(['/home'])
  //   })
  // }

  async signUP(){
    if (this.ionicForm.valid) {

      await this.authService.registerService(this.ionicForm.value.email, this.ionicForm.value.password,this.ionicForm.value.fullname).catch((err) => {
        console.log(err);
      })

      // @ts-ignore
      const newUser = {
        mail: this.ionicForm.value.email,
        name: this.ionicForm.value.firstName,
        lastName: this.ionicForm.value.LastName,
        phoneNumber: this.ionicForm.value.contact
      };
      // @ts-ignore
      this.authService.addUser(newUser);





      this.router.navigate(['/details', this.ionicForm.value.email]);
    } else {
      return console.log('Please provide all the required values!');
    }
  }


}
