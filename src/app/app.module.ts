import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DetailsPageRoutingModule} from "./details/details-routing.module";
import {ItemService} from "../services/item.service";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import { defineCustomElements as jeepSqlite } from 'jeep-sqlite/loader'



jeepSqlite(window)


// @ts-ignore
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    HttpClientModule,
    AngularFireStorageModule,
    IonicModule.forRoot(), AppRoutingModule,AngularFirestoreModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),


  ],


  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ItemService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
