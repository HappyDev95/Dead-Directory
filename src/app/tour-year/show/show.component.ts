import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ShowDataService } from './../../services/show-data.service';
import { Show } from './../../dataModel/show';
import { AudioRecording } from './../../dataModel/audio-recording';

@Component({
  selector: 'show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit, OnDestroy {

  show: Show = null;
  private eventDate: string = null;
  private audioRecArray: AudioRecording[] = [];
  isLoadScreenActive: boolean;

  //injecting ActivatedRoute and ShowDataService via the constructor
  constructor(private route: ActivatedRoute, private showService: ShowDataService) {
    this.isLoadScreenActive = true;
  }

  /*
  * description:  get the 'eventDate' attribute from the routers ParamMap
  *               use showService to get the Show Object matching the eventDate parameter
  *               use showService to call Archive.org API to get audio recordings for the show on the given eventDate
  *               use showService to return Array of audio recordings
  */
  async ngOnInit() {
    //get the 'eventDate' attribute from the routers ParamMap
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.eventDate = params.get('eventDate');
    });

    this.show = await this.showService.getShowMatchingDate(this.eventDate);
    await this.showService.doGetSoundboardDataRequest(this.eventDate);
    this.audioRecArray = await this.showService.getAudioRecordingArray();
  }

  /*
  * description: use showService to clear it's array of show taping for a show.
  *              we must do this because the array persists for the lifecycle of
  *              the parent component.
  */
  ngOnDestroy(): void {
    this.showService.clearAudioRecordingArray();
  }

  // TODO: have a loading screen with ~5seconds of time to load all the soundboards
  ngAfterViewInit() {
    setTimeout(() => { this.isLoadScreenActive = false }, 2000);
  }

  getAudioRecArr() {
    return this.audioRecArray;
  }

}
