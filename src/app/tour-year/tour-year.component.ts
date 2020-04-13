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
  //on TourYearComponent ngOnInit and destroyed on TourYearComponent ngOnDestroy
  providers: [ ShowDataService ],
})

export class TourYearComponent implements OnInit {

  private tourYear: string = null;
  private showArr: Show[] = [];
  isShowing: boolean = false;

  //injecting ActivatedRoute and ShowDataService via the constructor
  constructor(private route: ActivatedRoute, private showService: ShowDataService) {}

  /*
  * description:  get the 'year' attribute from the routers ParamMap
  *               use showService to get a years worth of tour data
  *               use showService to set showArr = an array of Show Objects holding show data
  */
  ngOnInit(): void {
    //get the 'year' attribute from the routers ParamMap
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.tourYear = params.get('year');
    });

    this.showService.doGetTourYearRequest(this.tourYear);
    this.showArr = this.showService.getShowArray();
  }

  /*
  * description: when a route is activated i.e. we navigate to a child, set a flag
  *              to indicate this. Utilizes router-outlet's (activate) event binding
  */
  onActivate(){
    this.isShowing = true;
  }

  /*
  * description: when a route is activated i.e. we navigate to a child, set a flag
  *              to indicate this. Utilizes router-outlet's (deactiviate) event binding
  */
  onDeactivate() {
    this.isShowing = false;
  }

  getTourYear() {
    return this.tourYear;
  }

  getShowArray() {
    return this.showArr;
  }

  getShow(index) {
    return this.showArr[index];
  }

}
