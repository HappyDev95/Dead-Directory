import { Component, OnInit } from '@angular/core';

import { ShowDataService } from './../services/show-data.service';
import { Show } from './../dataModel/show';

@Component({
  selector: 'app-today-in-gd-hist',
  templateUrl: './today-in-gd-hist.component.html',
  styleUrls: ['./today-in-gd-hist.component.scss'],
  //add ShowDataService as a provider means it gets created
  //on ngOnInit and destroyed on ngOnDestroy
  providers: [ ShowDataService ],
})
export class TodayInGDHistComponent implements OnInit {

  private date: Date = new Date();
  private showArr: Show[] = [];
  isShowing: boolean;
  currentIndex: number;
  readonly dateOptions: Object = { year: 'numeric', month: 'numeric', day: 'numeric',  weekday: 'long', };


  constructor(private showService: ShowDataService) {
    this.currentIndex = 0;
    this.isShowing = false;
  }

  ngOnInit(): void {
    this.getTodaysDate();
    //use our show serivce to call our api via our http service
    this.showService.doGetShowsMatchingDate(this.date);
    this.showArr = this.showService.getShowArray();
  }

  getTodaysDate() {
    return this.date.toLocaleDateString("en-US", this.dateOptions);
  }

  getShowArray() {
    return this.showService.getShowArray();
  }

  displaySetlist(index) {
    this.isShowing = true;    //when true, display the set list
    this.currentIndex = index;
  }

  getShow(index) {
    return this.showArr[index];
  }

  //sets isShowing to false which will display the list of shows
  //for a given tour year
  returnToTourYear() {
    this.isShowing = false;
  }

}
