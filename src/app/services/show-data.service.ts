import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import{ Show } from './../dataModel/show';
import { AudioRecording } from './../dataModel/audio-recording';

import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShowDataService {

  tourYear: string = null;
  private showArr: Show[] = [];                        //Array of show objects which hold a show's data
  private audioRecordingArray: AudioRecording[] = [];  //Array of soundboards/audience tapings

  //inject our HttpService via the constructor
  constructor(private httpService: HttpService) { }

  //Gets the tour information for a given year.
  //The requested tour year is passed in via the router
  //use httpService to perform a request to API on our behalf
  doGetTourYearRequest(year) {
    var response = this.httpService.getTourData(year);
    response.subscribe(arrOfObjects => {
      for(let idx in arrOfObjects) {
        this.setShowData(arrOfObjects[idx]);
      }
    });
  }

  //Gets the tour information for a given date
  //use httpService to perform a request to API on our behalf
  doGetShowsMatchingDateRequest(date) {
    var response = this.httpService.getShowsMatchingDate(date);
    response.subscribe(arrOfObjects => {
      for(let idx in arrOfObjects) {
        this.setShowData(arrOfObjects[idx]);
      }
    });
  }

  //Gets the soundboard/audience tapes for a given date
  //use httpService to perform a request to API on our behalf
  doGetSoundboardDataRequest(date) {
    var response = this.httpService.getSoundboardData(date);

     response.subscribe(arrOfObjects => {
       for(var idx in arrOfObjects) {
         this.setAudioRecordings(arrOfObjects[idx]);
       }
     });
  }

  /*
  * description: Sets the attributes for an AudioRecording object. Once all the
  *              attributes are set on that object, add the AudioRecording object
  *              to audioRecordingArray, an array which holds all the AudioRecordings
  *              for a given show.
  */
  setAudioRecordings(audioData) {
    var audioRec = new AudioRecording();
    for(let key in audioData) {
      switch(key) {
        case 'avg_rating':
          audioRec.setAverageRating(audioData[key]);
          break;
        case 'downloads':
          audioRec.setDownloads(audioData[key]);
          break;
        case 'identifier':
          audioRec.setIdentifier(audioData[key]);
          break;
        case 'num_reviews':
          audioRec.setNumberReviews(audioData[key]);
          break;
      }
    }
    this.audioRecordingArray.push(audioRec);
  }

  getAudioRecordingArray() {
    return this.audioRecordingArray;
  }

  /*
  * description: Sets the attributes for a Show object. Once all the attributes
  *              are set on that object add the Show object to the setOfShows Array,
  *              an array which holds Show objects.
  */
  setShowData(showData) {
    var show = new Show();
    for(let key in showData){
      switch(key) {
        case 'eventDate':
          show.setEventDate(showData[key]);
          break;
        case 'venueName':
          show.setVenueName(showData[key]);
          break;
        case 'cityName':
          show.setCityName(showData[key]);
          break;
        case 'cityLocation':
          show.setCityLocation(showData[key]);
          break;
        case 'setList':
          //store set list arrays in this.setList[index];
          //For ex: this.setList[index] = {set1[], set2[], encore[]};
          var setsOfShow = [];
          if(showData[key].length > 0) {
            //index through showData[key] - an Array representing set1, set2, ..., encore
            for(var set in showData[key]){
              setsOfShow.push(showData[key][set]);
            }
          } else {
            //if theres no set list it is reprsented as an empty array
            setsOfShow.push(['No setlist data for this show']);
          }
          show.setSetListArray(setsOfShow);
          break;
      }
    }
    this.showArr.push(show);
  }

  getShowArray() {
    return this.showArr;
  }

  /*
  * params: date
  * description: use the date parameter passed in to check against a Show objects
  *              event date variable. If Show.eventDate equals the date paramter passed in
  *              then return the Show object that we matched with.
  */
  getShowMatchingDate(date) {
    if(this.showArr.length < 1) {
      return null;
    }

    var showToRet = null;

    //// TODO: fix this to break out of the forloop... cant use forEach and break
    this.showArr.forEach(element => {
      if(element.getEventDateYYYYMMDD() === date) {
        showToRet = element;
      }
    });
    return showToRet;
  }

   //Sorts dates ascending i.e Jan -> Dec
   orderByYearAscending() {
    //We turn our dates, which are stored as strings, to Date objects
    this.showArr.sort( (showA, showB) => {
       let dateA = new Date(showA.getEventDate());
       let dateB = new Date(showB.getEventDate());
       if(dateA > dateB){
         return 1;
       }
       if(dateA < dateB){
         return -1;
       }
       return 0;
     });
   }

   //Sort dates descending i.e. Dec -> Jan
   orderByYearDescending() {
     this.showArr.sort( (showA, showB) => {
       let dateA = new Date(showA.getEventDate());
       let dateB  = new Date(showB.getEventDate());
       if(dateA < dateB){
         return 1;
       }
       if(dateA > dateB){
         return -1;
       }
       return 0;
     });
   }

   //sorts shows by the venue name alphabetically
   //(ex: Avenue, Bvenue, ... Zvenue)
   orderByVenue() {
     this.showArr.sort( (showA, showB) => {
       if(showA.getVenueName() > showB.getVenueName()) {
         return 1;
       }
       if(showA.getVenueName() < showB.getVenueName()) {
         return -1;
       }
       return 0;
     });
   }

   //sorts shows by the state/location name alphabetically
   //(ex: Alaska, British Columbia, ..., Vermont)
   orderByState() {
     this.showArr.sort( (showA, showB) => {
       if(showA.getCityLocation() > showB.getCityLocation()) {
         return 1;
       }
       if(showA.getCityLocation() < showB.getCityLocation()) {
         return -1;
       }
       return 0;
     });
   }

}
