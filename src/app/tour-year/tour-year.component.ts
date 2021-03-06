import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

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

  isOkayToRoute: boolean = false;
  showRouteActivated: boolean = false;
  isLoadScreenActive: boolean;

  //injecting ActivatedRoute and ShowDataService via the constructor
  constructor(private route: ActivatedRoute, private showService: ShowDataService) {
    this.isLoadScreenActive = true;
  }

  /*
  * description:  get the 'year' attribute from the routers ParamMap
  *               use showService to get a years worth of tour data
  *               use showService to set showArr = an array of Show Objects holding show data
  */
  async ngOnInit() {
    //get the 'year' attribute from the routers ParamMap
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.tourYear = params.get('year');
    });

    await this.showService.doGetTourYearRequest(this.tourYear);
    this.showArr = this.showService.getShowArray();

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
  onActivate() {
    this.showRouteActivated = true;
  }

  /*
  * description: when a route is activated i.e. we navigate to a child, set a flag
  *              to indicate this. Utilizes router-outlet's (deactiviate) event binding
  */
  onDeactivate() {
    this.showRouteActivated = false;
  }

  getTourYear() : string {
    return this.tourYear;
  }

  getShowArray() : Show[] {
    return this.showArr;
  }

  getShow(index : number) : Show {
    return this.showArr[index];
  }

}
