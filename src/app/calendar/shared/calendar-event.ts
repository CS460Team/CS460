export class CalendarEvent {
    startDate: string;
    startDateType: any = typeof this.startDate;
    startTime: string;
    startTimeType: any = typeof this.startTime;
    startDateTime: string = ((this.startDate as string) + (this.startTime as string));
    endDate: string;
    endTime: string;
    created: Date = new Date();
    updated: Date = new Date();
    title: string;
    titleType: any = typeof this.title;
    notes: string;
}