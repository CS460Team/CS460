import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/observable';
import { Subject } from 'rxjs/subject';
import { of } from 'rxjs/observable/of';

import { CalendarEvent } from './calendar-event';
import { EventDataService } from './event-data.service';

@Injectable()
export class CalendarService {

    public selectedDate: Date; // Date selected by user
    public displayDate: Date; // Month and Year to display on calendar
    public today: Date = new Date(); // Variable to keep track of the date today

    // Observable date sources E.g Writing to stream
    private selectedDateSource = new Subject<Date>();

    // Observable Date Streams; For reading from stream
    dateSelected: Observable<Date>;

   
    public eventsObservable: Observable<CalendarEvent[]>;

    constructor(private dataService: EventDataService) {
        this.dateSelected = this.selectedDateSource.asObservable();
        this.eventsObservable = this.dataService.eventsObservable;
        this.dataService.getEvents().subscribe(
            (events: CalendarEvent[]) => {
                this.updateEvents(events);
                console.log('Calendar Service: events successfully pushed to eventSource');
            },
            (error: any) => {
                console.error('Calendar Service: something went wrong: ', error);
            },
            () => {
                console.log('Calendar Service: events subscription has been completed');
            }
            );
        
        
    }

    updateEvents(events: CalendarEvent[]) {
        this.dataService.updateSource(events);
    }

    // Service method to write a new date to the subject
    selectDate(date: Date) {
        this.selectedDateSource.next(date);
    }

  

    public calculateDate(week: number, day: number, startDay: number): number {
        return (week - 1) * 7 + day - startDay;
    }




}
