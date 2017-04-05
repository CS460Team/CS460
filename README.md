##CS 460 Event Calendar Web App

###Purpose
This repository is a school assignment for the project management course CS460 at Bentley University Spring 2017. The goal of this project is to build a simple event calendar using current web technologies. Specifically we are using the MEAN stack for development since having to deal with only one language for both front and back end makes it a little bit easier on us.

###Vision
As the main collaborators of this repository are still undergraduate students with little real world development background the aim of this project is more of for learning purposes rather than utility. In order to better understand how both the front and back end operate we decided to make a simplistic clone of the various web calendars such as Google Calendar.

##Requirements
By the end of development this project should have the following:

###Front-end

####Calendar View

  - Ability to view different months
  - Ability to select particular days
  - Ability to add events starting on particular days
  - Ability to remove particular events
  - Ability to update particular events
  - Displays short summaries of events for each day

####Week View
- Side view that is alongside the calendar view
- Displays all events for the week starting from today's date

####Event View
- On double clicking an event summary in the calendar view this view will pop up
- Contains current details for the particular event
- Details for event are modifiable
  - Event Description
  - Start Date and time
  - End Date and time

###Back-end

#####MongoDB
- Document Database
- Stores queryable JSON files

####Restful API
#####Events list Resource

Request

    GET "/api/events"

Response Schema

    {
      "listId": string,
      "items" : [
        events Resource
      ]
    }

Request

    POST "/api/events"

Request Body Schema

    {
      "eventId": string,
      "created": datetime,
      "updated" : datetime,
      "summary" : string,
      "description" : string,
      "start": {
        "date": date,
        "datetime":datetime,
        "timezone":string
      },
      "end": {
        "date" : date,
        "datetime" : datetime,
        "timezone": string
      }
    }

Description
Adds an event resource to the events list with the specified information
#####Events Resource

Request

    GET "/api/events/:eventId"

Response Schema

    {
      "eventId": string,
      "created": datetime,
      "updated" : datetime,
      "summary" : string,
      "description" : string,
      "start": {
        "date": date,
        "datetime":datetime,
        "timezone":string
      },
      "end": {
        "date" : date,
        "datetime" : datetime,
        "timezone": string
      }
    }

These Resources are base off the [Google Calendar API](https://developers.google.com/google-apps/calendar/v3/reference/events#resource).  Please review them to get more detailed information. These resources do not correspond one-to-one with Google's API, but much of it is the same.
