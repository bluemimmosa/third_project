import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
	user: any;
	@Input('name') userName: string; //@Input is only called after constructor is initialized.
  constructor() { //constructor code
  	// called when the selector is used.
  	//doesnt initialize all fields.
  }

  ngOnInit(): void { //ngOnInit() is called after complete intialization of object is finished.
  	this.user = {
		name: this.userName,
		title: 'Software Developer',
		address: 'Indrayani, Shankharapur-09, Kathmandu, Nepal',
		phone:[
			'977 9840014714',
			'977 9843059542',
			'977 9808229804'
		],
	};
  }

}
