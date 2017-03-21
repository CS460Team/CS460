(function() {
  'use strict';
  angular
    .module('app')
    .config(['$locationProvider','$routeProvider',

  function config($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise('/calendar');
      // .when('/calendar',{
      //   template: '<calendar-view></calendar-view>'
      // })

  }
  ]);
})();
