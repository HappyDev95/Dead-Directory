import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  //set in the enviornment config file
  private apiUrl: String = environment.apiPathUrl;

  //inject HttpClient and Router via the constructor
  constructor(private http: HttpClient, private router: Router) { }

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

    try {
      return await this.http.get(`${this.apiUrl}/api/getTourData/`, {params}).toPromise();
    } catch (err) {
      this.errorHandler(err);
    }
  }

  /*
  * description: Asynchronously calls our express API to serve up all the shows that match the date
  * returns: Promise with Array of show objects who's eventDate === today
  */
  async getShowsMatchingDate(date) {
    let params = new HttpParams();
    params = params.set('dateParam', date);

    try {
      return await this.http.get(`${this.apiUrl}/api/getShowsMatchingDate/`, {params}).toPromise();
    } catch (err) {
      this.errorHandler(err);
    }
  }

  /*
  * description: Asynchronously calls our express API to return an Object containing the URLs
  *              for the soundboards/tapes for a given date, if any exist
  * returns: Promise with Array of Objects holding information provided by the Archive.org API
  */
async getSoundboardData(date) {
    let params = new HttpParams();
    params = params.set('dateParam', date);

    try {
      return await this.http.get(`${this.apiUrl}/api/getSoundboardData/`, {params}).toPromise();
    } catch (err) {
      this.errorHandler(err);
    }
  }

  /*
  * description: Primitive Error Handler to handle the errors returned from making our API calls
  *              routes to error page if a 404 error is detected.
  * params:      HttpErrorResponse
  */
  errorHandler(error : HttpErrorResponse) {
    if(error.status === 404) {
      console.log(error);
      this.router.navigate([error.status]);
    } else {
      console.log('something went wrong! ' + error);
    }
  }

}
