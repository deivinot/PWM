import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./header/header.component";
import {MainComponent} from "./main/main.component";
import {CategoriesComponent} from "./categories/categories.component";
import {RegisterComponent} from "./register/register.component";
import {TypeComponent} from "./type/type.component";


const routes: Routes = [


  { path: 'login', component: LoginComponent }, // Ruta para el componente LoginComponent
  { path: '', component: MainComponent },
  { path: 'cat', component: CategoriesComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'categoria', component: TypeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
