'use strict';
/* module.exports allows the initalized function to be set to a variable outside of this file
with a call to require('events.routes')

This allows the routes for the express app to be defined outside of where the express app is first initalized
which in the case of this project is app.js

This function takes an express app as an input and sets multiple routes to the express app
*/
module.exports = function(app){

  app.get('/api/events', getEvents);
  app.get('/api/events/:eventId', getEventById);
  app.get('/api/events/:startDate-:endDate', getEventsByDateRange);

  app.post('/api/events', postEvent);
  app.delete('/api/events/:eventId', deleteEvent);
  app.put('/api/events/:eventId', updateEvent);

  // Callback function to delete a particular event from the events list
  function deleteEvent(req,res,next){

  }

  //Callback function for retrieving all Events for calendar
  function getEvents(req, res, next){

  }

  // Callback function for retrieving a set of Events within a particular date range
  // E.g. all events between the dates 9/6/2017 and 10/11/2017
  function getEventsByDateRange(req, res, next){

  }

  //Callback function for retrieving one based on Id
  function getEventById(req, res, next){

  }

  // Callback function that takes an Event resource and adds it to the Event List
  function postEvent(req,res, next){

  }

  // Callback function that modifies the details of an event resource
  function updateEvent(req,res,next){

  }


};
