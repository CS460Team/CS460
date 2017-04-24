import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { CalendarService } from './shared/calendar.service';
import { EventDataService } from './shared/event-data.service';

import { CalendarEvent } from './shared/calendar-event';

import { Observable } from 'rxjs/observable';


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
export class CalendarComponent implements OnInit, AfterViewInit {


    startDay: number;       // The day of week that the month starts on
    currentMonth: number;   // The currently selected Month by the User
    currentYear: number;    // The currently selected Year by the user
    totalDays: number;      // The total number of days in the displaying month
    days: string[];         // A constant string array representing the names for the days of the week
    months: string[];       // A constant string Array representing the names for the months
    
    selectedDate: Date;     // The currently selected Date as a full date object

    weekEvents: Promise<CalendarEvent[]>;
    


    constructor(private calendarService: CalendarService, private dataService: EventDataService) {}

    /**On initialization this component subscripes to the Observable for monitoring selected Dates
     * It initializes all instance variables to their appropriate values. It also initializes the 
     * service's displayDate to be the month that should be on display to the user
     */
    ngOnInit(): void {
        this.days = days;
        this.months = months;
        
        // ----------------Observable Initialization --------------------
        // This initalization block tells the observable to take any values
        // added to the stream (E.g. The date selected by the user) and set
        // the class variable to be that value
        this.calendarService.dateSelected.subscribe(
            selected => this.selectedDate = selected
        );
        
        // --------------------------------------------------------------

        this.currentMonth = this.calendarService.today.getMonth();
        this.currentYear = this.calendarService.today.getFullYear();
        // Sets the display date to the first of the month
        this.calendarService.displayDate = new Date(this.currentYear, this.currentMonth);
        // sets the total days for the month to be the last day of the month
        this.totalDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

        this.startDay = this.calendarService.displayDate.getDay();

        this.selectDay(this.calendarService.today.getDate() + '');
    }
    ngAfterViewInit() {
         this.calendarService.selectDate(this.calendarService.today);
    }

    /** isValidDate is a function that ensures that all dates displayed to the user are valid
     * for the particular month on display
     */
    public isValidDate(day): boolean {
        return day <= this.totalDays && day > 0;
    }

    /** calculateDate is a method for displaying the correct date in table format 
     * on the display. It takes the week number for that month as well as  the day of the week as
     * a number and returns the corresponding date
     */
    public calculateDate(week, day): number {
        const date: number = this.calendarService.calculateDate(week, day, this.startDay);
        return date;
    }

    /** nextMonth is a method for incrementing the display's month value*/
   public nextMonth(): void{
       console.log('calendar component: currentMonth = ' + this.currentMonth);
        this.calendarService.displayDate.setMonth(this.calendarService.displayDate.getMonth() + 1);
        this.update();
        console.log('calendar component: currentMonth = ' + this.currentMonth);
   }

   /** prevMonth is a method for decrementing the display's month value */
   public prevMonth(): void {
       console.log('calendar component: currentMonth = ' + this.currentMonth);
       this.calendarService.displayDate.setMonth(this.calendarService.displayDate.getMonth() - 1);
       this.update();
       console.log('calendar component: currentMonth = ' + this.currentMonth);
   }
//    update is a helper method for keeping the class variables accurate
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
        const selectedDate = new Date(currentYear, currentMonth, selectedDay);
        this.calendarService.selectDate(selectedDate); // Pushes the selected Date to the observable
        this.weekEvents = this.dataService.getEventsRange(selectedDate.getTime(),(selectedDate.getTime() + 7 * 24 * 60 * 60 * 1000));
      

    }





}
