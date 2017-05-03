import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


import {Observable} from 'rxjs/observable';
import {Subject} from 'rxjs/subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { CalendarEvent } from './calendar-event';

@Injectable()
export class EventDataService {
    private eventUrl = 'http://ec2-54-218-127-146.us-west-2.compute.amazonaws.com:8080/api/events'; // URL to Web api

    private eventsSource = new Subject<CalendarEvent[]>();

    public eventsObservable = this.eventsSource.asObservable();
    constructor(private http: Http){}

    getEvents(): Observable<CalendarEvent[]> {
        console.log('EventDataService: retrieving events...');
        return this.http.get(this.eventUrl)
            .do({
                next: res => console.log('EventDataService: getEvents: HTTP Response = ', res),
                error: err =>  console.error('Error while retrieving data', err),
                complete: () => console.log('Do operator completed')
            }
                )
            .map((response: Response) => {
                const calEvents = response.json() as CalendarEvent[];
                console.log('EventDataService: getEvents: http response as CalendarEvent[] = ', calEvents);
                this.eventsSource.next(calEvents);
                return calEvents;
            })
            .catch(this.handleError);

    }

    getEvent(id: number): Promise<CalendarEvent>{
        const url = `${this.eventUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then((response: Response) => response.json() as CalendarEvent)
        .catch(this.handleError);
    }

    getEventsRange(start: number, end: number): Promise<CalendarEvent[]>{
        const url = `${this.eventUrl}/${start}-${end}`;
        return this.http.get(url)
        .toPromise()
        .then((response: Response) => response.json() as CalendarEvent[])
        .catch(this.handleError);
    }

    addEvent(newEvent: CalendarEvent): Promise<CalendarEvent[]>{
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http.post(this.eventUrl, JSON.stringify(newEvent), options)
                .toPromise()
                .then((response: Response) => {
                    const returnedEvents = response.json() as CalendarEvent[];
                    this.eventsSource.next(returnedEvents);
                    return returnedEvents;
                })
                .catch(this.handleError);

    }

    deleteEvent(event: CalendarEvent): Observable<CalendarEvent[]> {
        // TODO: add functionality to deleteEvent method to allow it to update
        // the observable containing the events array such that the given event 
        // is removed from the array and is put back into the subject
        const url = this.eventUrl + '/'+ event._id;
        return this.http
                .delete(url)
                .map(response =>  {
                    const returnedEvents = response.json() as CalendarEvent[];
                    this.eventsSource.next(returnedEvents);
                    return returnedEvents;
                })
                .catch(this.handleError);
    }

    public updateSource(events: CalendarEvent[]) {
        this.eventsSource.next(events);
    }

    private handleError(error: any): Promise<any> {
        // TODO: Add Suitable Error handling
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

}