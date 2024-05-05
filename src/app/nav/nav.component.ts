import {Component, EventEmitter, output} from '@angular/core';
import {ChangePageService} from "../services/change-page.service";

@Component({
  selector: 'app-nav',
  //standalone: true,

  templateUrl: './nav.component.html',
  styleUrls: ['../app.component.css', '../header/header.component.css', 'nav.component.css']
})
export class NavComponent {


  constructor(private changePage : ChangePageService) {

  }
  changeNav(str:string){
    this.changePage.change(str);
  }

}
