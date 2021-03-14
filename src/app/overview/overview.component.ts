import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { TimelineEvent, TimelineLocation, TimelineType } from '../models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  events: TimelineEvent[];
  locations: TimelineLocation[];
  types: TimelineType[];

  constructor(private baseService: BaseService) {
    this.events = [];
    this.locations = [];
    this.types = [];
   }

  ngOnInit(): void {
    this.events = this.getEvents();
    this.locations = this.getLocations();
    this.types = this.getTypes();
  }

  getEvents(): TimelineEvent[]{
    try{
      let events: TimelineEvent[] = [];
      this.baseService.getEvents().subscribe((data: any) =>
        {
          data.data.forEach((event: TimelineEvent) => {
            events.push(event);
          });
        });
      return events;
    }
    catch(error){
      console.log(error);
      return [];
    }
  }

  getLocations(): TimelineLocation[]{
    try{
      let locations: TimelineLocation[] = [];
      this.baseService.getLocations().subscribe((data: any) =>
        {
          data.data.forEach((loc: TimelineLocation) => {
            locations.push(loc);
          });
        });
      return locations;
    }
    catch(error){
      console.log(error);
      return [];
    }
  }

  getTypes(): TimelineType[]{
    try{
      let types: TimelineType[] = [];
      this.baseService.getTypes().subscribe((data: any) =>
        {
          data.data.forEach((type: TimelineType) => {
            types.push(type);
          });
        });
      return types;
    }
    catch(error){
      console.log(error);
      return [];
    }
  }
  

}
