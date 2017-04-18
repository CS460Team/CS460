import { CalendarAppPage } from './app.po';

describe('calendar-app App', () => {
  let page: CalendarAppPage;

  beforeEach(() => {
    page = new CalendarAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
