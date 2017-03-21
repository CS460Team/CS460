(function() {
  'use strict';

  angular
    .module('app.calendar')
    .component('calendarView', {
      templateUrl: 'app/calendar/calendar.template.html',
      controller: 'CalendarViewCtrl'
    });
})();
