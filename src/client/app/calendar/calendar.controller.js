(function() {
  'use strict';
  angular
    .module('app.calendar')
    .controller('CalendarViewCtrl',[CalendarViewController]);





    function CalendarViewController(){
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
        for(var x in [3,5,8,10]){
          if(vm.currentMonth === x){
            vm.monthDays = 30;
            break;
          }
        }

        if (vm.currentMonth === 1) {
          vm.monthDays = 28;
         }


    }
})();
