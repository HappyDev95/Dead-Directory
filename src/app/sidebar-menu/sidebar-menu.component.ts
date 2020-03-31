import { Component, OnInit } from '@angular/core';
import { TourYearService } from './../tour-year/tour-year.service';

@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  constructor(private tourService: TourYearService) { }

  ngOnInit(): void { }

  orderByYearAscending() {
    this.tourService.orderByYearAscending();
  }

  orderByYearDescending() {
    this.tourService.orderByYearDescending();
  }

  orderByVenue() {
    // TODO: do this
  }

}
