import { Component, OnInit } from '@angular/core';
import { ShowDataService } from './../services/show-data.service';

@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  constructor(private showService: ShowDataService) { }

  ngOnInit(): void { }

  orderByYearAscending() {
    this.showService.orderByYearAscending();
  }

  orderByYearDescending() {
    this.showService.orderByYearDescending();
  }

  orderByVenue() {
    this.showService.orderByVenue();
  }

  orderByState() {
    this.showService.orderByState();
  }

}
