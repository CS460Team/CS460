import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

import { CalendarEvent } from '../shared/calendar-event';
import { EventDataService } from '../shared/event-data.service';
import { CalendarService } from '../shared/calendar.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnChanges {
  /**
   * I want the eventListComponent to display the user's events for the week from the day they selected
   * on the calendar. The user should be able to click a particular date on the calendar and all events
   * between that date and a week from that date should be displayed. In order to do this I need something
   * to be able to track what day is actively selected by the user. This variable should be changed whenever
   * the user clicks a different date on the calendar.
   */

  @Input() selectedDate: Date;
  weekEvents: Observable <CalendarEvent[]>;
  @Output() selectedEventRequest = new EventEmitter<CalendarEvent>();
  calEvents: CalendarEvent[];

  constructor(private eventDataService: EventDataService, private calendarService: CalendarService) { }

  ngOnInit() {
  }
selectEvent(event: CalendarEvent) {
  
  if (!event.endDate) {
    event.endDate = event.startDate;
  }
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);
  const indexOfTStart = start.toISOString().indexOf('T');
  const indexOfPeriodStart = start.toISOString().indexOf('.');
  const indexOfTEnd = end.toISOString().indexOf('T');
  const indexOfPeriodEnd = end.toISOString().indexOf('.');
  const startdate = start.toISOString().slice(0,indexOfTStart);
  const startTime = start.toISOString().slice(indexOfTStart + 1, indexOfPeriodStart);
  const endDate = end.toISOString().slice(0,indexOfTEnd);
  const endTime = end.toISOString().slice(indexOfTEnd + 1, indexOfPeriodEnd);
  event.startDate = startdate;
  event.startTime = startTime;
  event.endDate = endDate;
  event.endTime = endTime;
  this.selectedEventRequest.emit(event);
  
}

ngOnChanges() {
  console.log('EventList Component: selectedDate = ' + this.selectedDate);
}


  private daysToMilliseconds(days: number): number {
    const hoursInDay = 24;
    const minutesInHour = 60;
    const secondsInMinute = 60;
    const millisecondsInSecond = 1000;
    return days * hoursInDay * minutesInHour * secondsInMinute * millisecondsInSecond;
  }

}
