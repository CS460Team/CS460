(function() {
  'use strict';
  angular
  .module('app.event')
  .config(['$routeProvider', configure]);

  function configure($routeProvider) {
    $routeProvider.when('/event',{
      template: '<event-view></event-view>',

    });
  }
})();
