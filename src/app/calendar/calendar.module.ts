import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CalendarComponent } from './calendar.component';
import { CalendarFormModule } from './calendar-form/calendar-form.module';

import {CalendarService} from './shared/calendar.service';
import { EventDataService } from './shared/event-data.service';
import { EventListComponent } from './event-list/event-list.component';

// TODO: Create an Events view component (maybe module?) to display events;

@NgModule({
    declarations: [CalendarComponent, EventListComponent],
    imports: [
    CommonModule,
    CalendarFormModule,
    HttpModule
    ],
    exports: [CalendarComponent],
    providers: [CalendarService, EventDataService]
})
export class CalendarModule {}