import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { TimelineEvent } from '../models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  events: TimelineEvent[];

  constructor(private baseService: BaseService) {
    this.events = [];
   }

  ngOnInit(): void {
    this.baseService.GetEvent().subscribe(data =>
      {
        let e = data.data[0];
        let event = <TimelineEvent> e;
        this.events[0] = event;
      });
  }

}
