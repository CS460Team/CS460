import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {CalendarFormComponent} from './calendar-form.component';


@NgModule({
    declarations: [CalendarFormComponent],
    imports: [FormsModule, CommonModule],
    exports: [CalendarFormComponent]
})
export class CalendarFormModule {

}