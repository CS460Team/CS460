import { Injectable } from '@angular/core';



@Injectable()
export class CalendarService {

    public selectedDate: Date; // Date selected by user
    public displayDate: Date; // Month and Year to display on calendar
    public today: Date = new Date(); // Variable to keep track of the date today



    public calculateDate(week: number, day: number, startDay: number): number {
        return (week - 1) * 7 + day - startDay;
    }




}
