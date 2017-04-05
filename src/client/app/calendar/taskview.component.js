(function(){
  'use strict';
  angular
  .module('app.calendar')
  .component('taskView',{
    templateUrl: 'app/calendar/taskview.template.html',
    controller: 'TaskViewCtrl',
    bindings: {
      activeDate: '<'
    }
  });
})();
