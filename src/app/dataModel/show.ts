export class Show {

  private eventDate: string;
  private venueName: string;
  private cityName: string;
  private cityLocation: string;
  private setList: Object[] = [];

  constructor() {}

  public getEventDate() : string {
    return this.eventDate;
  }

  public getEventDateYYYYMMDD() : string {
    return new Date(this.eventDate).toISOString().slice(0,10);
  }

  public getVenueName() : string {
    return this.venueName;
  }

  public getCityName() : string {
    return this.cityName;
  }

  public getCityLocation() : string {
    return this.cityLocation;
  }

  public getSetListArray() : Array<Object> {
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

  public setSetListArray(setListArr: Array<Object>) {
    this.setList = setListArr;
  }

}
