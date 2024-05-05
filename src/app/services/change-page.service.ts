import {Injectable, NgZone} from '@angular/core';
import Item from "../interfases";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ChangePageService {

  constructor(private zone:NgZone, private router: Router) { }

  change(string: string): void {
    // Navigate to the product detail page
    this.zone.run(() => {
      this.router.navigate([string]);
    });
  }
}

