import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  constructor() {
    this.user = new User();
    this.user.name = "Niraj Khadka";
    this.user.designation = "Software Tester";
    this.user.address = "Shankharapur-09, Indrayani, KAthmandu";
    this.user.phone = [
      '9808229804',
      '9843059542',
      '9840014714'
    ];
  }
}
