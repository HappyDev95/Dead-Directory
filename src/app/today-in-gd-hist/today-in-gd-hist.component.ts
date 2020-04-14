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
  isShowing: boolean = false;
  readonly dateOptions: Object = { year: 'numeric', month: 'numeric', day: 'numeric',  weekday: 'long', };

  //injecting ShowDataService via the constructor
  constructor(private showService: ShowDataService) { }

  /*
  * description:  use showService to get an Array of Show Objects matching date
  *               use showService to set showArr = an array of Show Objects holding show data
  */
  ngOnInit(): void {
    this.showService.doGetShowsMatchingDateRequest(this.date);
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

  getTodaysDate() {
    return this.date.toLocaleDateString("en-US", this.dateOptions);
  }

  getShowArray() {
    return this.showService.getShowArray();
  }

}
