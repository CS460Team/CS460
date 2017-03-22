(function() {
    "use strict";
    angular
      .module('app.calendar')
      .controller('DayCtrl', [DayController]);

      function DayController($scope, $element, $attrs){
          var ctrl = this;
          ctrl.sendDay = sendDay;

          function sendDay(){
            ctrl.onSelect({day:ctrl.dayNumber})
          }



      }
  }
)();
