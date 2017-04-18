import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CalendarEvent } from './calendar-event';

@Injectable()
export class EventDataService {
    private eventUrl = 'http://ec2-54-218-127-146.us-west-2.compute.amazonaws.com:8080/api/events'; // URL to Web api

    constructor(private http: Http){}

    getEvents(): Promise<CalendarEvent[]> {
        return this.http.get(this.eventUrl)
            .toPromise()
            .then((response: Response) => response.json() as CalendarEvent[])
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

    addEvent(newEvent: CalendarEvent): Promise<CalendarEvent>{
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this.http.post(this.eventUrl, JSON.stringify(newEvent), options)
                .toPromise()
                .then((response: Response) => response.json() as CalendarEvent)
                .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        // TODO: Add Suitable Error handling
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

}