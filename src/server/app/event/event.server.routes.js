/*jshint node:true*/
'use strict';

var events = require('./event.server.controller');
module.exports = function(app){



  app.get('/api/events', function(req,res){
    if (req.query.date){
        events.findMonth(req,res);
    }
    events.findAll(req,res);

  });
  //app.get('/api/events/:eventId', getEventById);


  app.post('/api/events', events.create);
  app.delete('/api/events/:eventId', events.delete);
  app.put('/api/events/:eventId', events.update);
};
