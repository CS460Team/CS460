(function(){
  'use strict';
  angular
  .module('app.calendar')
  .controller('TaskViewCtrl', ['$scope','dataservice',TaskViewController]);

  function TaskViewController($scope, dataservice){
    var vm = this;
    vm.weekEvents = []; //All events between selected Day and seven days after selected Day
    vm.startdate = new Date();
    vm.enddate = new Date(vm.startdate.getFullYear(),vm.startdate.getMonth(),vm.startdate.getDate()+7);
    vm.initalize = activate;
    vm.deleteEvent = deleteEvent;
    $scope.$on('selectedIDChanged',function(event,args){
      activate();
    });
    activate();

    function activate() {
      //Initalization code
      console.log('activeDate: ' + vm.activeDate);
      vm.startdate = vm.activeDate;
      console.log('currentYear from startdate: ' + vm.startdate.getFullYear());
      vm.enddate = new Date(vm.startdate.getFullYear(),vm.startdate.getMonth(),vm.startdate.getDate()+7);
      return getWeekEvents(vm.startdate,vm.enddate);
    }

    //getWeekEvents uses the custom service dataservice to send an http request to
    //'/api/events/:startdate-enddate' through the getWeekEvents method that comes packaged in the service
    //the returned data is wrapped in a promise which is then passed to a function that sets the controller's
    //instance variable vm.weekEvents to the collection of data
    function getWeekEvents(start,end){
      return dataservice.getWeekEvents(start,end).then(function(data){
        vm.weekEvents = data;
        return vm.weekEvents;
      });
    }

    // Delete's the clicked on Event from the database 
    function deleteEvent(event){
      console.log("You double clicked on: " + event);

      dataservice.deleteEvent(event);
      activate();
    }
  }
})();
