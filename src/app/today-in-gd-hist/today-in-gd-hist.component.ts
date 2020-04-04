import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-in-gd-hist',
  templateUrl: './today-in-gd-hist.component.html',
  styleUrls: ['./today-in-gd-hist.component.scss']
})
export class TodayInGDHistComponent implements OnInit {

  private date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    // TODO: CALL HttpService.getTIGDH();
    this.getTodaysDate();
  }

  getTodaysDate() {
    return this.date;
  }
}
