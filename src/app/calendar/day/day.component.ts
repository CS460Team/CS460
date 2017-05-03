import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { CalendarService } from '../shared/calendar.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit, OnChanges {

  @Input() givenDay: number;
  selectedDate: Date;
  @Output() dateSelectedRequest: EventEmitter<Date> = new EventEmitter<Date>();
  isSelected: boolean;
  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    
    
    this.calendarService.dateSelected.subscribe(
      (date: Date ) => {
        this.selectedDate = date;
        console.log('date set to: ', this.selectedDate);
        this.isSelected = this.checkIsSelected();
      }
      );
      
  }
  ngOnChanges() {
    
    this.isSelected = this.checkIsSelected();
  }

  selectDate(day: number) {
    const selectedDate = new Date(
      this.calendarService.displayDate.getFullYear(),
      this.calendarService.displayDate.getMonth(), 
      day);
      this.dateSelectedRequest.emit(selectedDate);
      console.log('You changed the date to ', selectedDate);
  }
  checkIsSelected(): boolean {
    console.log('value of selectedDate = ', this.selectedDate);
    if (!!this.selectedDate) {
      return this.selectedDate.getFullYear() === this.calendarService.displayDate.getFullYear()
            && this.selectedDate.getMonth() === this.calendarService.displayDate.getMonth()
            && this.selectedDate.getDate() === this.givenDay;
    }
    return false;
  }

}
