(function() {
  'use strict';

  angular
    .module('app.event')
    .component('eventView', {
      templateUrl: 'app/event/event.template.html',
      controller: 'EventViewCtrl'
      // bindings: {
      //   events: '='
      // }
    });
})();
