(function() {
  'use strict';
  angular
    .module('app.event')
    .controller('EventViewCtrl',[EventViewController]);





    function EventViewController(){
      var vm = this;

      vm.list = [
        {
          name:"Soccer Practice",
          date:"3/22/2017",
          location:"Dana Center",
          start:"4pm",
          end:"6pm",
          details:"bring soccer ball"
        },
        {
          name:"GB410",
          date:"3/22/2017",
          location:"Smith 116",
          start:"9:30am",
          end:"10:50am",
          details:"case study due"
        }
      ];
      
      // vm.event1 = {name:"Soccer Practice", date:"3/22/2017",
      //   location:"Dana Center", start:"4pm", end:"6pm", details:"bring soccer ball"};
      //
      // vm.event2 = {name:"GB410", date:"3/22/2017",
      //   location:"Smith 116", start:"9:30am", end:"10:50am", details:"case study due"};

      vm.updateEvent = function(event, prop, value) {
        event[prop] = value;
      };

      vm.deleteEvent = function(event) {
        var index = vm.list.indexOf(event);
        if (index >= 0) {
          vm.list.splice(index, 1);
        }
      };
    }
})();
