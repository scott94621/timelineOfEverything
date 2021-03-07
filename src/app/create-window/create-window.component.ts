import { Component, OnInit } from '@angular/core';
import { TimelineEvent, TimelineLocation, TimelineType } from '../models/';
import { DateTime } from 'luxon';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-create-window',
  templateUrl: './create-window.component.html',
  styleUrls: ['./create-window.component.css']
})
export class CreateWindowComponent implements OnInit {

  selectedValue: string;
  creationOptions: string[];

  timelineEvent: TimelineEvent;
  timelineLocation: TimelineLocation;
  timelineType: TimelineType;

  constructor(private baseService: BaseService) {
    this.timelineEvent = new TimelineEvent();
    this.timelineLocation = new TimelineLocation();
    this.timelineType = new TimelineType();

    this.creationOptions = ["event", "location", "type"];
   }


  ngOnInit(): void {
  }

  createTimelineEvent():void{
    this.baseService.postEvent(this.timelineEvent).subscribe(res => {
      console.log('succes');
    })
  }
  
}
