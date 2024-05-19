import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {ItemService} from "../../services/item.service";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({


  /*
  * BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFirestoreModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore())*/
  imports: [
    CommonModule,
    FormsModule,

    IonicModule,
    DetailsPageRoutingModule,

  ],

  declarations: [DetailsPage]
})
export class DetailsPageModule {}
