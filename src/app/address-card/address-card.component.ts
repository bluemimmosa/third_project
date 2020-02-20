import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
	@Input('user') user: User; //@Input is only called after constructor is initialized.
	isCollapsed: boolean = true;
	constructor() { //constructor code
  	// called when the selector is used.
  	//doesnt initialize all fields.
  }

  toogleCollapse() {
	  this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit(): void { //ngOnInit() is called after complete intialization of object is finished.
  
  }

}
