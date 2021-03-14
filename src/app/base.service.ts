import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimelineEvent, TimelineLocation, TimelineType } from './models';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient) { }

  getEvents(): Observable<any>{
    return this.http.get("http://localhost:8080/api/getEvents");
  }

  getLocations(): Observable<any>{
    return this.http.get("http://localhost:8080/api/getLocations");
  }

  getTypes(): Observable<any>{
    return this.http.get("http://localhost:8080/api/getTypes");
  }

  postEvent(timelineEvent: TimelineEvent): Observable<any>{
    return this.http.post("http://localhost:8080/api/createTimelineEvent", timelineEvent);
  }
  
  postLocation(timelineLocation: TimelineLocation): Observable<any>{
    return this.http.post("http://localhost:8080/api/createTimelineLocation", timelineLocation);
  }

  postType(timelineType: TimelineType): Observable<any>{
    return this.http.post("http://localhost:8080/api/createTimelineType", timelineType);
  }
}
