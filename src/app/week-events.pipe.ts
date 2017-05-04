import { Pipe, PipeTransform } from '@angular/core';

import { CalendarEvent } from './calendar/shared/calendar-event';


@Pipe({
  name: 'weekEvents'
})
export class WeekEventsPipe implements PipeTransform {

  transform(value: CalendarEvent[], date: string): CalendarEvent[] {
    if(!!value){
      const selectedDate = new Date(date);
    const selectedDateMilli = selectedDate.getTime();
    const weekMillis = 7 * 24 * 60 * 60 * 1000;
    let eventsForWeek = value.filter(
      (event: CalendarEvent, index: number, array: CalendarEvent[]) => {
        const startDate = new Date(event.startDate);
        const startMillis = startDate.getTime();
        return 0 <= (startMillis - selectedDateMilli) && (startMillis - selectedDateMilli) <= weekMillis;
      }
    );
    return eventsForWeek;
    }
    return [];
  }

}
