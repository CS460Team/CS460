import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OnChanges, SimpleChanges } from '@angular/core';

import { CalendarEvent } from '../shared/calendar-event';
import { CalendarService } from '../shared/calendar.service';
import { EventDataService } from '../shared/event-data.service';
@Component({
    selector: 'calendar-form',
    templateUrl: './calendar-form.component.html'
})
export class CalendarFormComponent {
    model: CalendarEvent = new CalendarEvent();

    changelog: string[] = [];


    constructor(private calendarService: CalendarService, private dataService: EventDataService) {

    }

    public logModel(): void {
        console.log(this.model);
    }

   
    public addEvent(eventDetails): void {
        this.dataService.addEvent(eventDetails)
            .then((calEvent: CalendarEvent) => console.log('Post successful: ', calEvent))
            .catch((error: any) => console.error('An error occured: ', error));
    }

    public onSubmit(calendarForm: NgForm): void {

        let calEvent: {
            title: string,
            location: string,
            notes: string,
            startDate: Date,
            endDate: Date
        }



        calEvent = {
            title: this.model.title,
            location: '',
            notes: this.model.notes,
            startDate: new Date(this.model.startDate + " " + this.model.startTime),
            endDate: new Date(this.model.endDate + " " + this.model.endTime)

        };
        console.log(calEvent);
        //this.addEvent(calEvent); //UNCOMMENT THIS WHEN DONE DEBUGGING

        // Done TODO: Make a data service that sends the model to Database
        // TODO: After model has been saved to the Database form values should be reset with calendarForm.reset()
    }
}