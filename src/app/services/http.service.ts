import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }
  //inject HttpClient via the constructor

  /*
  * description: calls our express API to serve up tour data for the specified year
  *              the tour year is passed to the api as a param.
  * returns :    array of show objects
  */
  getTourData(year) {
    //keep in mind HttpParams are immutable, each time set() is called
    //a new HttpParam object is created
    let params = new HttpParams();
    params = params.set('tourYear', year);

    return this.http.get('http://localhost:8000/getTourData/', {params});
  }

  /*
  * description: calls our express API to serve up all the shows that match the today's date
  * returns: array of show objects who's eventDate === today
  */
  getShowsMatchingDate(date) {
    let params = new HttpParams();
    params = params.set('dateParam', date);

    return this.http.get('http://localhost:8000/TIGDH/', {params});
  }

}
