(function() {
    "use strict";
    angular
      .module('app.calendar')
      .controller('DayCtrl', ['$scope','$element','$attrs',DayController]);

      function DayController($scope, $element, $attrs){
          var ctrl = this;
          ctrl.sendDay = sendDay;
          //ctrl.isSelected = ctrl.selectedDay.getDate() === ctrl.dayNumber;
          console.log("Initial Selected Day: " + ctrl.selectedDay);

          function sendDay(){
            //ctrl.isSelected = ctrl.selectedDay.getDate() === ctrl.dayNumber;
            console.log('selectedDay according to Day controller: ' + ctrl.selectedDay);

            console.log("Sending day: " + ctrl.dayNumber);
            ctrl.onSelect({day:ctrl.dayNumber});

          }



      }
  }
)();
