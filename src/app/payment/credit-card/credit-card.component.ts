import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.less']
})
export class CreditCardComponent implements OnInit {

  config ={"digits":4,"delimiter":'#'};

  constructor() { }

  myCards = [
    {
      holderName:"Kiran",
      name: "Visa",
      cardNo:"4111111111111111",
      exp:new Date()
    },
    {
      holderName:"Subbu",
      name: "MasterCard",
      cardNo:"5500000000000004",
      exp:new Date()
    },
    {
      holderName:"Ram",
      name: "American Express",
      cardNo:"3400000000005009",
      exp:new Date()

    },
    {
      holderName:"Satya",
      name: "Diner's Club",
      cardNo:"3000000000000467",
      exp:new Date()

    }
  ];

  ngOnInit() {
  }

}
