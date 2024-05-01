import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { MainComponent } from './main/main.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListaComponent } from './lista/lista.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ListaComponent,
    FooterComponent,
    NavComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({
      "projectId": "firstproyect-74fdb",
      "appId": "1:761511782041:web:42927daaa58622bb0fba08",
      "storageBucket": "firstproyect-74fdb.appspot.com",
      "apiKey": "AIzaSyCsxTV1XpylqE-pgAUDJ09iGu5NzKoO1oI",
      "authDomain": "firstproyect-74fdb.firebaseapp.com",
      "messagingSenderId": "761511782041"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
