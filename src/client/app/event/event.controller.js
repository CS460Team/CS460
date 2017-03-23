(function() {
  'use strict';
  angular
    .module('app.event')
    .controller('EventViewCtrl',[EventViewController]);





    function EventViewController(){
      var vm = this;

      vm.event1 = {name:"Soccer Practice", date:"3/22/2017",
        location:"Dana Center", start:"4pm", end:"6pm", details:"bring soccer ball"};

      vm.event2 = {name:"GB410", date:"3/22/2017",
        location:"Smith 116", start:"9:30am", end:"10:50am", details:"case study due"};

/*
      vm.name = ['Soccer Practice', 'GB410'];
      vm.date = ['3/22/2017', '3/25/2017'];
      vm.location = ['Dana Center', 'Smith 116'];
      vm.start = ['4:00pm', '9:30am'];
      vm.end = ['6:00pm', '10:50pm'];
      vm.details = ['bring soccer ball', 'case study due'];
*/

      // vm.events = [
      //   {
      //     name: 'Soccer Practice',
      //     date: '3/22/2017'
      //     location: 'Dana Center',
      //     start: '4:00pm',
      //     end: '6:00pm',
      //     details: 'remember cleats'
      //   },
      //   {
      //     name: 'GB410',
      //     date: '3/22/2017'
      //     location: 'Smith 118',
      //     start: '9:30am',
      //     end: '10:50am',
      //     details: 'case study due'
      //   }
      // ];

      // ctrl.updateEvent = function(event, prop, value) {
      //   event[prop] = value;
      // };
      //
      // ctrl.deleteEvent = function(event) {
      //   var index = ctrl.event.indexOf(events);
      //   if (index >= 0) {
      //     ctrl.events.splice(index, 1);
      //   }
      // };
    }
})();
