function EventDetailController() {
  var ctrl = this;

  ctrl.delete = function() {
    ctrl.onDelete({event: ctrl.event});
  };

  ctrl.update = function(prop, value) {
    ctrl.onUpdate({event: ctrl.event, prop: prop, value: value});
  };
}

angular.module('app.event').component('eventDetail', {
  templateUrl: 'app/event/eventdetail.template.html',
  controller: EventDetailController,
  bindings: {
    event: '<',
    onDelete: '&',
    onUpdate: '&'
  }
});
