import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimelineEvent } from './models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient) { }

  GetEvent(): Observable<any>{
    return this.http.get("http://localhost:8080/api/getUser");
  }

  postEvent(timelineEvent: TimelineEvent): Observable<any>{
    return this.http.post("http://localhost:8080/api/createTimelineEvent", timelineEvent);
  }
}
