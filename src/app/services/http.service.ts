import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  //inject HttpClient via the constructor
  constructor(private http: HttpClient) { }

  /*
  * description: Asynchronously calls our express API to serve up tour data for the specified year
  *              the tour year is passed to the api as a param.
  * returns :    Promise with Array of show objects
  */
  async getTourData(year) {
    //keep in mind HttpParams are immutable, each time set() is called
    //a new HttpParam object is created
    let params = new HttpParams();
    params = params.set('tourYear', year);

    return await this.http.get('http://localhost:8000/getTourData/', {params}).toPromise();
  }

  /*
  * description: Asynchronously calls our express API to serve up all the shows that match the date
  * returns: Promise with Array of show objects who's eventDate === today
  */
  async getShowsMatchingDate(date) {
    let params = new HttpParams();
    params = params.set('dateParam', date);

    return await this.http.get('http://localhost:8000/getShowsMatchingDate/', {params}).toPromise();
  }

  /*
  * description: Asynchronously calls our express API to return an Object containing the URLs
  *              for the soundboards/tapes for a given date, if any exist
  * returns: Promise with Array of Objects holding information provided by the Archive.org API
  */
async getSoundboardData(date) {
    let params = new HttpParams();
    params = params.set('dateParam', date);

    return await this.http.get('http://localhost:8000/getSoundboardData/', {params}).toPromise();
  }

}
