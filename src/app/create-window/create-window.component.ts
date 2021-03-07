import { Component, OnInit } from '@angular/core';
import { TimelineEvent } from '../models/';
import { DateTime } from 'luxon';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-create-window',
  templateUrl: './create-window.component.html',
  styleUrls: ['./create-window.component.css']
})
export class CreateWindowComponent implements OnInit {

  timelineEvent: TimelineEvent;
  constructor(private baseService: BaseService) {
    this.timelineEvent = new TimelineEvent();
   }


  ngOnInit(): void {
  }

  createTimelineEvent():void{
    this.baseService.postEvent(this.timelineEvent).subscribe(res => {
      console.log('succes');
    })
  }
  
}
