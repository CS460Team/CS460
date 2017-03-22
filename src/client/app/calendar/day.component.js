(function(){
  "use strict";
    angular
    .module('app.calendar')
    .component('day', {
      templateUrl:'app/calendar/day.template.html',
      controller: 'DayCtrl',
      bindings: {
        dayNumber: '<',
        selectedDay: '<',
        onSelect: '&'
      }
    });
}
)();
