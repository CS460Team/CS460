import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { CalendarService } from '../shared/calendar.service';
import { CalendarEvent} from '../shared/calendar-event';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit, OnChanges {

  @Input() givenDay: number;
  @Input() selectedDate: Date;
  @Output() dateSelectedRequest: EventEmitter<Date> = new EventEmitter<Date>();
  @Input() allEvents: CalendarEvent[];
  @Input() displayDate: Date;
  hasEvents: boolean;
  isSelected: boolean;
  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.isSelected = this.checkIsSelected();
    
  }
  ngOnChanges() {
    
    this.isSelected = this.checkIsSelected();
    this.hasEvents = this.checkEvents();
    console.log('hasEvents: ', this.hasEvents);
  }

  selectDate(day: number) {
    const selectedDate = new Date(
      this.displayDate.getFullYear(),
      this.displayDate.getMonth(), 
      day);
      this.dateSelectedRequest.emit(selectedDate);
      
  }
  checkIsSelected(): boolean {
    
    if (!!this.selectedDate) {
      return this.selectedDate.getFullYear() === this.displayDate.getFullYear()
            && this.selectedDate.getMonth() === this.displayDate.getMonth()
            && this.selectedDate.getDate() === this.givenDay;
    }
    return false;
  }

  checkEvents(): boolean {
   
    
    if (!!this.allEvents) {
    return this.allEvents.some(
      (value: CalendarEvent, index: number, array: CalendarEvent[]) => {
        const start = new Date(value.startDate);
        
        return start.getFullYear() === this.displayDate.getFullYear()
            && start.getMonth() === this.displayDate.getMonth()
            && start.getDate() === this.givenDay;
      }
    )
  }
  return false;
  }

}
