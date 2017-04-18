import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {CalendarFormComponent} from './calendar-form.component';


@NgModule({
    declarations: [CalendarFormComponent],
    imports: [FormsModule],
    exports: [CalendarFormComponent]
})
export class CalendarFormModule {

}