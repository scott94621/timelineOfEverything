import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
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
      this.setEvents();
    console.log(this.events);
  //    this.events = [
  //     {title: "Title", id: 1, date: DateTime.now(), endDate: DateTime.now(), description: "",happening: true, location: new TimelineLocation(), type: new TimelineType()}
  //   ,
  //   {title: "Title2", id: 2, date: DateTime.now(), endDate: DateTime.now(), description: "",happening: true, location: new TimelineLocation(), type: new TimelineType()}
  // ];
    this.locations = this.getLocations();
    this.types = this.getTypes();
  }

  setEvents(): void{
    try{
      this.baseService.getEvents().subscribe((data: any) =>
        {
          data.data.forEach((event: TimelineEvent) => {
            if(event.title){
              this.events.push(event);
            }
          });
        });
    }
    catch(error){
      console.log(error);
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
