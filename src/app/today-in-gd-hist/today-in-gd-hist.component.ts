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
  readonly dateOptions: Object = { year: 'numeric', month: 'numeric', day: 'numeric',  weekday: 'long', };
  isShowing: boolean = false;
  isOkayToRoute: boolean = false;
  isLoadScreenActive: boolean;

  //injecting ShowDataService via the constructor
  constructor(private showService: ShowDataService) {
    this.isLoadScreenActive = true;
  }

  /*
  * description:  use showService to get an Array of Show Objects matching date
  *               use showService to set showArr = an array of Show Objects holding show data
  */
  async ngOnInit() {
    await this.showService.doGetShowsMatchingDateRequest(this.date);
    this.showArr = await this.showService.getShowArray();

    // TODO: do this better... I'm not sure how yet, but look into RouteGuards, or preloading the service
    //right now we set this flag after the service is guaranteed to have the data which will then
    //allow our router-outlet to navigate us to the child route when we know the data is set. Without guaranteeing
    //the serivce has been called from the parent route component to init data errors could occur in the child component... so, do this better.
    this.isOkayToRoute = true;
    this.isLoadScreenActive = false;
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
