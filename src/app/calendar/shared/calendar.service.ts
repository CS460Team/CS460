import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/observable';
import { Subject } from 'rxjs/subject';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CalendarService {

    public selectedDate: Date; // Date selected by user
    public displayDate: Date; // Month and Year to display on calendar
    public today: Date = new Date(); // Variable to keep track of the date today

    // Observable date sources E.g Writing to stream
    private selectedDateSource = new Subject<Date>();

    // Observable Date Streams; For reading from stream
    dateSelected = this.selectedDateSource.asObservable();

    // Service method to write a new date to the subject
    selectDate(date: Date) {
        this.selectedDateSource.next(date);
    }

  

    public calculateDate(week: number, day: number, startDay: number): number {
        return (week - 1) * 7 + day - startDay;
    }




}
