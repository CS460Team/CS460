import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CalendarComponent } from './calendar.component';
import { CalendarFormModule } from './calendar-form/calendar-form.module';

import {CalendarService} from './shared/calendar.service';
import { EventDataService } from './shared/event-data.service';
import { EventListComponent } from './event-list/event-list.component';
import { WeekEventsPipe } from '../week-events.pipe';
import { DayComponent } from './day/day.component';

// TODO: Create an Events view component (maybe module?) to display events;

@NgModule({
    declarations: [CalendarComponent, EventListComponent, WeekEventsPipe, DayComponent],
    imports: [
    CommonModule,
    CalendarFormModule,
    HttpModule
    ],
    exports: [CalendarComponent],
    providers: [CalendarService, EventDataService]
})
export class CalendarModule {}