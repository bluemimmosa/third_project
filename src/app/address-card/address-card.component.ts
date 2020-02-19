import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
	user: any;
  constructor() {
  	this.user = {
		name: 'Niraj Khadka',
		title: 'Software Developer',
		address: 'Indrayani, Shankharapur-09, Kathmandu, Nepal',
		phone:[
			'977 9840014714',
			'977 9843059542',
			'977 9808229804'
		],
		number:[
			'2',
			'3',
			'4',
			'5'
		]
	};
  }

  ngOnInit(): void {
  }

}
