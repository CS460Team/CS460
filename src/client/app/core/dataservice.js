(function(){
  'use strict';

  angular
  .module('app.core')
  .factory('dataservice',['$http','$location','$q',dataservice]);

  function dataservice($http, $location, $q){

    //service to be returned
    var service = {
      createEvent: createEvent,
      deleteEvent: deleteEvent,
      getWeekEvents: getWeekEvents,
      getMonthEvents: getMonthEvents,
      getEvents: getEvents,
      getEvent: getEvent
    };

    return service;

    // Saves a new event to the database
    function createEvent(event){
      $http.post('api/events/',event)
      .then(function successCallback(response){
        console.log('Successfully saved to database');
        return response.data;
      },
      function errorCallback(response){
        console.log('Error occured');
        console.log('Status code' + response.status);
        console.log('Response data: ' + response.data);
      }
    );
    }

    function deleteEvent(event){
      console.log(event._id);
      $http.delete('api/events/'+event._id)
      .then(function successCallback(response){
        console.log('Event Successfully deleted');
        return response.data;
      },
        function errorCallback(response){
            console.log('Error occured');
            console.log('Status code' + response.status);
            console.log('Response data: ' + response.data);
            return response.data;
    }
    );
    }

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
