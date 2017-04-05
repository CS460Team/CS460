(function(){
  'use strict';

  angular
  .module('app.core')
  .factory('dataservice',['$http','$location','$q',dataservice]);

  function dataservice($http, $location, $q){

    //service to be returned
    var service = {
      getWeekEvents: getWeekEvents,
      getMonthEvents: getMonthEvents,
      getEvents: getEvents,
      getEvent: getEvent
    };

    return service;

    //Returns all Events for particular week
    function getWeekEvents(startdate,enddate){
      console.log('startdate:' + startdate);
      console.log('enddate:' + enddate);
        startdate = new Date(startdate).getTime();
        enddate = new Date(enddate).getTime();
        console.log('startdate in milliseconds: ' + startdate);
        console.log('enddate in milliseconds: ' + enddate);
        return $http.get('api/events/'+startdate+'-'+enddate)
              .then(function(response){
                return response.data;
              });
    }

    // Returns all Events for particular month
    function getMonthEvents(){

    }

    // Returns all Events in DB
    function getEvents(){

    }

    // Returns a specific event
    function getEvent(){

    }

  }
})();
