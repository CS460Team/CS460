(function() {
  'use strict';
  angular
    .module('app.calendar')
    .controller('CalendarViewCtrl',['$scope','$element','$attrs',CalendarViewController]);





    function CalendarViewController($scope, $element, $attrs){

      var date = new Date();
      var day = date.getDay();
      var month = date.getMonth();
      var year = date.getFullYear();

      var vm = this;
       vm.days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
       vm.months = [
         'January',
         'February',
         'March',
         'April',
         'May',
         'June',
         'July',
         'August',
         'September',
         'October',
         'November',
         'December'];
        vm.currentMonth = 7; //August
        vm.monthDays = 31;
        vm.count = 0;
        vm.currentYear = 2017;
        vm.startDay = new Date(vm.currentYear,vm.currentMonth,1).getDay(); 

        vm.selectedID = 1;
        vm.setSelected = setSelected;

        vm.previous = previous;       //Changes the calendar Month to the previous
        vm.next = next;               //Changes calendar month to next month
        vm.getMaxDays = getMaxDays;   //Gets the max number of days for the current Month


        var thirtyDays = [3,5,8,10];

        console.log("Initial Selected ID: " + vm.selectedID);

        function getMaxDays(){
          console.log("Executing getMaxDays()");
          if (vm.currentMonth === 1) {
            vm.monthDays = 28;
            return;
           }
          for(var x = 0; x < thirtyDays.length; x++){
            console.log("x value = " + x);
            console.log("currentMonth value = " + vm.currentMonth);
            if(vm.currentMonth === thirtyDays[x]){
              console.log("I am in the if statement in the for loop in getMaxDays()");
              console.log("x value = " + x);
              console.log("currentMonth value = " + vm.currentMonth);
              vm.monthDays = 30;
              return;
            }
          }
          vm.monthDays = 31;
          return;


        }


         function previous(){
           console.log("curentMonth Before previous() = " + vm.currentMonth);
           if (vm.currentMonth === 0){
             vm.currentMonth=11;
             vm.currentYear--;
           }
           else {
             vm.currentMonth = vm.currentMonth - 1;
           }
           vm.startDay = new Date(vm.currentYear,vm.currentMonth,1).getDay();
           console.log("currentMonth After previous() = " + vm.currentMonth);
         }


         function next(){
           console.log("curentMonth Before next() = " + vm.currentMonth);
           if (vm.currentMonth === 11) {
             vm.currentMonth=0;
             vm.currentYear++;
           }
           else {
             vm.currentMonth = vm.currentMonth + 1;
           }
           vm.startDay = new Date(vm.currentYear,vm.currentMonth,1).getDay();
           console.log("currentMonth After next() = " + vm.currentMonth);
         }

         function setSelected(id){
           console.log("You clicked me");

           vm.selectedID = id;
           console.log("selectedID is " + vm.selectedID);
         }

    }
})();
