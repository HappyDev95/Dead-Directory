import { DatePipe } from '@angular/common';

export class Show {

  private eventDate: string;
  private venueName: string;
  private cityName: string;
  private cityLocation: string;
  private setList: any[] = [];

  constructor() {}

  public getEventDate() {
    return this.eventDate;
  }

  public getEventDateYYYYMMDD() {
    return new Date(this.eventDate).toISOString().slice(0,10);
  }

  public getVenueName() {
    return this.venueName;
  }

  public getCityName() {
    return this.cityName;
  }

  public getCityLocation() {
    return this.cityLocation;
  }

  public getSetListArray() {
    return this.setList;
  }

  public setEventDate(eventDate: string) {
    this.eventDate = eventDate;
  }

  public setVenueName(venueName: string) {
    this.venueName = venueName;
  }

  public setCityName(cityName: string) {
    this.cityName = cityName;
  }

  public setCityLocation(cityLocation: string) {
    this.cityLocation = cityLocation;
  }

  public setSetListArray(setListArr: any[]) {
    this.setList = setListArr;
  }

}
