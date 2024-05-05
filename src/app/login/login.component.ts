import { Component, Input } from '@angular/core';
import {ItemsService} from "../services/items.service";
import {AuthServiceService} from "../services/auth-service.service";
import {ChangePageService} from "../services/change-page.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() mail: string = '';
  @Input() password: string = '';

  constructor(private auth: AuthServiceService, private changePageService: ChangePageService){
  this.mail = '';
  this.password = '';
  }


  login() {
    console.log(this.mail);
    this.auth.loginService(this.mail, this.password);


  }


}
