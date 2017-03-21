(function() {
  'use strict';
  angular
  .module('app.calendar')
  .config(['$routeProvider', configure]);

  function configure($routeProvider) {
    $routeProvider.when('/calendar',{
      template: '<calendar-view></calendar-view>',
      
    });
  }
})();
