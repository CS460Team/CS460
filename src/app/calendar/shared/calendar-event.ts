export class CalendarEvent {
    start: Date;
    end: Date;
    created: Date = new Date();
    updated: Date = new Date();
    title: string;
    notes: string;
}