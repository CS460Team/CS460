(function() {
    "use strict";
    angular
      .module('app.calendar')
      .controller('DayCtrl', ['$scope','$element','$attrs',DayController]);

      function DayController($scope, $element, $attrs){
          var ctrl = this;
          ctrl.sendDay = sendDay;
          console.log("Initial Selected Day: " + ctrl.selectedDay);

          function sendDay(){
            console.log("Sending day: " + ctrl.dayNumber);
            ctrl.onSelect({day:ctrl.dayNumber});

          }



      }
  }
)();
