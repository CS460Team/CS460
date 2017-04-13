(function(){
  'use strict';
  angular.module('app', [

    /*This array contains the modules that
    the core app module depends on*/
    'ngRoute',
    'app.calendar',
    'app.event',
    'app.core',
    'app.newEventView'
  ]);

})();




// // Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
