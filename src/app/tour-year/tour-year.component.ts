import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { SidebarMenuComponent } from './../sidebar-menu/sidebar-menu.component';
import { ShowDataService } from './../services/show-data.service';
import { Show } from './../dataModel/show';

@Component({
  selector: 'tour-year',
  templateUrl: './tour-year.component.html',
  styleUrls: ['./tour-year.component.scss'],
  //add ShowDataService as a provider means it gets created
  //on ngOnInit and destroyed on ngOnDestroy
  providers: [ ShowDataService ],
})

export class TourYearComponent implements OnInit {

  private tourYear: string = null;
  private showArr: Show[] = [];
  currentIndex: number = 0;
  isShowing: boolean = false;

  //injecting ActivatedRoute and ShowDataService via the constructor
  constructor(private route: ActivatedRoute, private showService: ShowDataService) {}

  ngOnInit(): void {
    //get the 'year' attribute from the routers ParamMap
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.tourYear = params.get('year');
    });

    //use our show serivce to call our api via our http service
    this.showService.doGetTourYearRequest(this.tourYear);
    //set showArr = an array of Show Objects holding show data
    this.showArr = this.showService.getShowArray();
  }

  displaySetlist(index){
    this.isShowing = true;    //when true, display the set list
    this.currentIndex = index;
  }

  //sets isShowing to false which will display the list of shows
  //for a given tour year
  returnToTourYear() {
    this.isShowing = false;
  }

  getTourYear() {
    return this.tourYear;
  }

  getCurrentIndex() {
    return this.currentIndex;
  }

  getShowArray() {
    return this.showArr;
  }

  getShow(index) {
    return this.showArr[index];
  }

}
