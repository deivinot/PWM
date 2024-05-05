import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { MainComponent } from './main/main.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListaComponent } from './lista/lista.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SectionComponent } from './section/section.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import {AuthServiceService} from "./services/auth-service.service";


import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {environment} from "./enviroment";
import { RegisterComponent } from './register/register.component';
import { TypeComponent } from './type/type.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ListaComponent,
    FooterComponent,
    NavComponent,
    SectionComponent,
    LoginComponent,
    CategoriesComponent,
    RegisterComponent,
    TypeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp (environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },AuthServiceService
  ]
})
export class AppModule { }
