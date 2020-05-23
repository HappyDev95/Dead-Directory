import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import{ Show } from './../dataModel/show';
import { AudioRecording } from './../dataModel/audio-recording';

@Injectable({
  providedIn: 'root'
})

export class ShowDataService {

  tourYear: string = null;
  private showArr: Show[] = [];                        //Array of show objects which hold a show's data
  private audioRecordingArray: AudioRecording[] = [];  //Array of soundboards/audience tapings

  //inject our HttpService via the constructor
  constructor(private httpService: HttpService) { }

  /*
  * description: Asynchronously gets the tour information for a given year and sets showArr. The requested
  *              tour year is passed in via the router use httpService to perform a request to API on our behalf
  */
  async doGetTourYearRequest(year: string) {
      await this.httpService.getTourData(year).then(data => {
        for(var test in data) {
          this.setShowData(data[test]);
        }
      });
  }

  /*
  * description: Asynchronously gets the tour information for a given date and sets showArr.
  *              Use httpService to perform a request to API on our behalf
  */
  async doGetShowsMatchingDateRequest(date: string) {
    await this.httpService.getShowsMatchingDate(date).then(async data => {
      for(var test in data) {
        this.setShowData(data[test]);
      }
    });
  }

  /*
  * description: Asynchronously gets the soundboard/audience tapes for a given date and sets AudioRecordings Array.
  *              Use httpService to perform a request to API on our behalf
  */
  async doGetSoundboardDataRequest(date: string) {
    this.httpService.getSoundboardData(date).then(async data => {
      for(var test in data) {
        this.setAudioRecordings(data[test]);
      }
    });
  }

  /*
  * description: Sets the attributes for an AudioRecording object. Once all the
  *              attributes are set on that object, add the AudioRecording object
  *              to audioRecordingArray, an array which holds all the AudioRecordings
  *              for a given show.
  */
  setAudioRecordings(audioData: Array<any>) {
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

  getAudioRecordingArray() : AudioRecording[] {
    return this.audioRecordingArray;
  }

  /*
  * description: used to clear the Array's contents. Note that doing Array.length = 0
  *              will update all references to that array to be length 0. If we did
  *              audioRecordingArray = [] then all references to the array would not be effected.
  */
  clearAudioRecordingArray() {
    this.audioRecordingArray.length = 0;
  }

  /*
  * description: Sets the attributes for a Show object. Once all the attributes
  *              are set on that object add the Show object to the setOfShows Array,
  *              an array which holds Show objects.
  */
  setShowData(showData: Array<any>) {
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

  getShowArray() : Show[] {
    return this.showArr;
  }

  /*
  * params: date
  * description: use the date parameter passed in to check against a Show objects
  *              event date variable. If Show.eventDate equals the date paramter passed in
  *              then return the Show object that we matched with.
  */
  getShowMatchingDate(date: string) : Show {
    if(this.showArr.length < 1) {
      return null;
    }

    var showToRet = null;

    //// TODO: fix this to break out of the forloop for performance... cant use forEach and break.
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
