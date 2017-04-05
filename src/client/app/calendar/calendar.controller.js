(function() {
  'use strict';
  angular
    .module('app.calendar')
    .controller('CalendarViewCtrl',['$scope','$element','$attrs',CalendarViewController]);





    function CalendarViewController($scope, $element, $attrs){

      

      var vm = this;

      // Instance Variables Intialization
        vm.currentMonth = 7; //August
        vm.monthDays = 31;
        vm.count = 0;
        vm.currentYear = 2017;
        vm.startDay = new Date(vm.currentYear,vm.currentMonth,1).getDay();
        vm.selectedID = 1;
        vm.setSelected = setSelected;
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



        // Instance methods initalization
        vm.previous = previous;       //Changes the calendar Month to the previous
        vm.next = next;               //Changes calendar month to next month
        vm.getMaxDays = getMaxDays;   //Gets the max number of days for the current Month
        vm.isInvalidDate = isInvalidDate;
        vm.calculateDate = calculateDate;



        console.log("Initial Selected ID: " + vm.selectedID);

        // getMaxDays is a method that sets the max days for a month with respect to
        // the value of the current month and the current year (In case of leap year)
        function getMaxDays(){
          console.log("Executing getMaxDays()");
          switch (vm.currentMonth){
            case 1:
              if (isLeapYear(vm.currentYear)){
              vm.monthDays = 29;
              break;
            }
              vm.monthDays = 28;
              break;
            case 3:
            case 5:
            case 8:
            case 10:
              vm.monthDays = 30;
              break;
            default:
              vm.monthDays = 31;
          }




        }

        // previous is a method for controlling the back button on the UI to
        // it simply subtracts 1 from the current month and sets it to 11 if the current month
        // is 0. It also adjusts the startDay to correspond with the correct day of the week
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

         // next is essentially the same as previous method but increments instead of decrementing
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

         // setSelected is a simple setter for determing which day in UI is selected
         function setSelected(id){
           console.log("You clicked me");

           vm.selectedID = id;
           console.log("selectedID is " + vm.selectedID);
         }

         // isInvalidDate takes the weekNumber and dayNumber and checks to make sure the day is within the valid range for the current month
         function isInvalidDate(dateEntry){
           console.log("Date Entry passed in: " + dateEntry);
           return dateEntry <= 0 || dateEntry > vm.monthDays;
         }

         // calculateDate simply calculates the date value based on the given weeekNum and dayNum
         function calculateDate(weekNum, dayNum){
           return ((weekNum - 1) * 7 + dayNum) - vm.startDay;
         }

         // isLeapYear checks if the passed in year is a leap year (E.g. February has 29 days instead of 28)
         function isLeapYear(year){
           if (year % 400 === 0){
             return true;
           }
           if (year % 100 === 0){
             return false;
           }
           return year % 4 === 0;
         }

    }
})();
