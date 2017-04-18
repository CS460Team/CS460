import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CalendarEvent } from '../shared/calendar-event';
import { CalendarService } from '../shared/calendar.service';
import { EventDataService } from '../shared/event-data.service';
@Component({
    selector: 'calendar-form',
    templateUrl: './calendar-form.component.html'
})
export class CalendarFormComponent {
    model: CalendarEvent = new CalendarEvent();


    constructor(private calendarService: CalendarService, private dataService: EventDataService){}

    public addEvent(eventDetails): void{
        this.dataService.addEvent(eventDetails)
        .then((calEvent: CalendarEvent) => console.log('Post successful: ', calEvent))
        .catch((error: any) => console.error('An error occured: ', error));
    }

    public onSubmit(calendarForm: NgForm): void {

        const selectedDate: number = this.calendarService.selectedDate.getDate();
        const selectedYear: number = this.calendarService.selectedDate.getFullYear();
        const selectedMonth: number = this.calendarService.selectedDate.getMonth();
        const selectedStartTime: string = calendarForm.value.startTime as string;
        const startHour: number = parseInt(selectedStartTime.substring(0, selectedStartTime.indexOf(':')), 10);
        const startMin: number = parseInt(selectedStartTime.substring(selectedStartTime.indexOf(':') + 1), 10);
        const startTime: Date =  new Date(selectedYear, selectedMonth, selectedDate, startHour, startMin);
        console.log('calendar-form Component: startTime = ' + startTime);


        const selectedEndTime: string = calendarForm.value.endTime as string;
        const endHour: number = parseInt(selectedEndTime.substring(0, selectedEndTime.indexOf(':')), 10);
        const endMin: number = parseInt(selectedEndTime.substring(selectedEndTime.indexOf(':') + 1), 10);
        const endTime: Date =  new Date(selectedYear, selectedMonth, selectedDate, endHour, endMin);

        this.model.start = startTime;
        this.model.end = endTime;

        const event = {
            title: this.model.title,
            location: '',
            notes: this.model.notes,
            startDate: this.model.start,
            endDate: this.model.end

        }
        this.addEvent(event);

        // TODO: Make a data service that sends the model to Database
        // TODO: After model has been saved to the Database form values should be reset with calendarForm.reset()
    }
}