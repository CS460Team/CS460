(function(){
  'use strict';
  angular
  .module('app.newEventView')
  .controller('NewEventCtrl', ['$rootScope','dataservice','$scope',NewEventController]);

  function NewEventController($rootScope,dataservice, $scope){
    $scope.reset = reset;
    $scope.update = update;

    // Resets the form to be empty
    function reset(form){
      if (form){
        form.$setPristine();
        form.$setUntouched();
      }
      $scope.event = {};
    }

    // Saves the event information to the database
    function update(event){
      console.log("Events: " + event);
      dataservice.createEvent(event);
      $scope.event = {};
      $rootScope.$broadcast('selectedIDChanged');

    }
  }
})();
