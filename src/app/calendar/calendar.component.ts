import { Component, OnInit } from '@angular/core';

import { CalendarService } from './shared/calendar.service';
import { ActiveDate } from './shared/activeDate';

const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {
    
    
    startDay: number;
    currentMonth: number;
    currentYear: number;
    totalDays: number;
    days: string[];
    months: string[];
    

    constructor(private calendarService: CalendarService) {}

    ngOnInit(): void {
        this.days = days;
        this.months = months;
        this.calendarService.selectedDate = this.calendarService.today;
        
        this.currentMonth = this.calendarService.today.getMonth();
        this.currentYear = this.calendarService.today.getFullYear();
        // Sets the display date to the first of the month
        this.calendarService.displayDate = new Date(this.currentYear, this.currentMonth); 
        // sets the total days for the month to be the last day of the month
        this.totalDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        
        this.startDay = this.calendarService.displayDate.getDay();
    }

    public isValidDate(day) {
        return day <= this.totalDays && day > 0;
    }

    public calculateDate(week, day): number {
        const date: number = this.calendarService.calculateDate(week, day, this.startDay);
        return date;
    }

   public nextMonth(): void{
       console.log('calendar component: currentMonth = ' + this.currentMonth);
        this.calendarService.displayDate.setMonth(this.calendarService.displayDate.getMonth() + 1);
        this.update();
        console.log('calendar component: currentMonth = ' + this.currentMonth);
   }
   public prevMonth(): void {
       console.log('calendar component: currentMonth = ' + this.currentMonth);
       this.calendarService.displayDate.setMonth(this.calendarService.displayDate.getMonth() - 1);
       this.update();
       console.log('calendar component: currentMonth = ' + this.currentMonth);
   }
   private update(): void {
        this.currentMonth = this.calendarService.displayDate.getMonth();
        this.currentYear = this.calendarService.displayDate.getFullYear();
        // Sets the display date to the first of the month
        this.calendarService.displayDate = new Date(this.currentYear, this.currentMonth); 
        // sets the total days for the month to be the last day of the month
        this.totalDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        
        this.startDay = this.calendarService.displayDate.getDay();
   }

//    selectDay takes in the day from the div tag in the table and sets the selected day to that value
    public selectDay(day: string) {
        const currentMonth = this.calendarService.displayDate.getMonth();
        const currentYear = this.calendarService.displayDate.getFullYear();
        const selectedDay = +day;
        this.calendarService.selectedDate.setDate(selectedDay);
        this.calendarService.selectedDate.setMonth(currentMonth);
        this.calendarService.selectedDate.setFullYear(currentYear);
        console.log('calendar component: selectedDate = ' + this.calendarService.selectedDate);
       
    }

   

   
}
