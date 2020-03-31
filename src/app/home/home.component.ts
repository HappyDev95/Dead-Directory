import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  yearsActiveArr: string[] = [];

  constructor() {
    //populate our array of dates that The GratefulDead toured
    this.yearsActiveArr = new Array();
    for(var i = 1965; i <= 1995; i++){
      this.yearsActiveArr.push(i.toString());
    }
    this.yearsActiveArr.push('2015');
  }

  ngOnInit(): void {}

}
