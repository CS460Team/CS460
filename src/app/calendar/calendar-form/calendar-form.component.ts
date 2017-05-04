import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OnChanges, SimpleChanges } from '@angular/core';

import { CalendarEvent } from '../shared/calendar-event';
import { CalendarService } from '../shared/calendar.service';
import { EventDataService } from '../shared/event-data.service';
@Component({
    selector: 'calendar-form',
    templateUrl: './calendar-form.component.html'
})
export class CalendarFormComponent implements OnInit, OnChanges {
    /**CalendarFormComponent should allow the user to enter events on specified days
     * When the user is ready to add an event they should be able to hit the submit 
     * button and the event will be added to the database. 
     * 
     * The submit button should also add the event to the relevant events observable
     * for the active week and any days on the calendar to display a little hint
     */

    model: CalendarEvent = new CalendarEvent();
    @Input() selectedEvent: CalendarEvent;
    @Output() deleteRequest = new EventEmitter<CalendarEvent>();
    @Output() addEventRequest = new EventEmitter<CalendarEvent>();
    changelog: string[] = [];


    constructor(private calendarService: CalendarService, private dataService: EventDataService) {

    }

    ngOnInit() {
        if (!this.selectedEvent) {
            this.model.title = 'My Event';
        this.model.startDate = this.calendarService.today.getFullYear() + 
            '-' + ('0'+(this.calendarService.today.getMonth() + 1)).slice(-2) +
            '-' + this.calendarService.today.getDate();
        this.model.startTime = (this.calendarService.today.getHours()) + 
            ':' + this.calendarService.today.getMinutes();
        
        this.model.endDate = this.calendarService.today.getFullYear() + 
            '-' + ('0' + (this.calendarService.today.getMonth() + 1)).slice(-2) +
            '-' + this.calendarService.today.getDate();
        this.model.endTime = (this.calendarService.today.getHours() + 1) + 
            ':' + this.calendarService.today.getMinutes();
        }
        else {
            this.model.title = this.selectedEvent.title;
            this.model.startDate = this.selectedEvent.startDate;
            this.model.startTime = this.selectedEvent.startTime;
            this.model.endDate = this.selectedEvent.endDate;
            this.model.endTime = this.selectedEvent.endTime;
            this.model.notes = this.selectedEvent.notes;
        }
        

    }

    ngOnChanges() {
            if(!!this.selectedEvent) {
                this.model.title = this.selectedEvent.title;
            this.model.startDate = this.selectedEvent.startDate;
            this.model.startTime = this.selectedEvent.startTime;
            this.model.endDate = this.selectedEvent.endDate;
            this.model.endTime = this.selectedEvent.endTime;
            this.model.notes = this.selectedEvent.notes;
            }
            
    }

    public logModel(): void {
        console.log(this.model);
    }

   
    public addEvent(event: CalendarEvent): void {
        this.addEventRequest.emit(event);
    }

    deleteEvent(event: CalendarEvent) {
        this.deleteRequest.emit(event);
    }

    public onSubmit(calendarForm: NgForm): void {

         this.addEvent(this.model); //UNCOMMENT THIS WHEN DONE DEBUGGING

        // Done TODO: Make a data service that sends the model to Database
        // TODO: After model has been saved to the Database form values should be reset with calendarForm.reset()
    }
}