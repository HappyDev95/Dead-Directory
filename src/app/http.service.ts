import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  getTourData(year){
    //keep in mind HttpParams are immutable, each time set() is called
    //a new HttpParam object is created
    let params = new HttpParams();
    params = params.set('tourYear', year);

    return this.http.get('http://localhost:8000/getTourData/', {params});
  }

}
