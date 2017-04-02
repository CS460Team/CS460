/*jshint node:true*/
'use strict';
var mongoose = require('mongoose');
require('./event.server.model.js');
var Event = mongoose.model('Event');

exports.findAll = function(req, res){

  Event.find({},function(err, events){
    if (err){
      res.send(err);
    }

    res.json(events);
  });
};

exports.findMonth = function(req, res){
  var date = new Date(req.query.date);
  var monthStart = new Date(date.getYear(),date.getMonth());
  var monthEnd = new Date(date.getYear(),date.getMonth()+1);
  monthEnd = monthEnd.setDate(0);
  Event.
    find({
      startDate: {$gte: monthStart, $lte: monthEnd}
    });
};

// Callback function for creating a new event
exports.create = function(req, res){

// Uses mongoose to create the event base on the event model
  Event.create({
    title: req.body.title,
    location: req.body.location,
    dateCreated: Date.now(),
    dateUpdate: Date.now(),
    notes: req.body.notes,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  },
  //This function is a callback that checks if there were any errors if there were it just sends it back
  //If there weren't any errors it sends back a collection of all events currently in Database
  function(err, event){
      if (err){
        res.send(err);
      }

      //No errors occured so searches db for all events and returns it as json if successful
      Event.find({

      }, function(err, events){
        if (err){

          res.send(err);
        }

        res.json(events);
      });
  });
};

exports.delete = function(req, res){
    Event.remove({
      _id: req.params.eventId
    },
    function(err, events){
      if(err){
        res.send(err);
      }

      //Get and return all events after delete
      Event.find({

      }, function(err, events){
        if (err){

          res.send(err);
        }

        res.json(events);
      });
    }
  );
};


exports.update = function(req, res){


  var myevent;
  if (req.body.title){
    Event.findOneAndUpdate({
        _id:req.params.eventId
      },
      {
        title: req.body.title,
        dateUpdate: Date.now()
      },
      function(err, myevent){
        if(err){
          console.log("error occured: " + err);
          res.send(err);
        }
        myevent = myevent;
      }
    );

  }
  if(req.body.location){
    Event.findOneAndUpdate({
        _id:req.params.eventId
      },
      {
        location: req.body.location,
        dateUpdate: Date.now()
      },
      function(err, myevent){
        if(err){
          console.log("error occured: " + err);
          res.send(err);
        }
        myevent = myevent;
      }
    );
  }

  if(req.body.notes){
    Event.findOneAndUpdate({
        _id:req.params.eventId
      },
      {
        notes: req.body.notes,
        dateUpdate: Date.now()
      },
      function(err, myevent){
        if(err){
          console.log("error occured: " + err);
          res.send(err);
        }
        myevent = myevent;
      }
    );
  }

  if(req.body.startDate){
    console.log("StartDate is not null:" + req.body.startDate);
    Event.findOneAndUpdate({
        _id:req.params.eventId
      },
      {
        startDate: new Date(req.body.startDate),
        dateUpdate: Date.now()
      },
      function(err, event){
        if(err){
          console.log("error occured: " + err);
          res.send(err);
        }
        myevent = myevent;
      }
    );
  }

  if(req.body.endDate){
    Event.findOneAndUpdate({
        _id:req.params.eventId
      },
      {
        endDate: new Date(req.body.endDate),
        dateUpdate: Date.now()
      },
      function(err, myevent){
        if(err){
          console.log("error occured: " + err);
          res.send(err);
        }
        myevent = myevent;
      }
    );
  }
  res.json(myevent);
};
