import { Component, OnInit, Input, OnChanges } from '@angular/core';

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
   * I want to the eventListComponent to display the user's events for the week from the day they selected
   * on the calendar. The user should be able to click a particular date on the calendar and all events
   * between that date and a week from that date should be displayed. In order to do this I need something
   * to be able to track what day is actively selected by the user. This variable should be changed whenever
   * the user clicks a different date on the calendar.
   */

   @Input() selectedDate: Date;
  @Input() weekEvents: CalendarEvent[];

  constructor(private eventDataService: EventDataService, private calendarService: CalendarService) { }

  ngOnInit() {
    
    
    
    
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
