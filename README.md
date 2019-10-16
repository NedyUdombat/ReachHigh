ReachHigh = A digitized platform that helps in building a personalized career plan
=======

## Badges
[![Build Status](https://travis-ci.com/NedyUdombat/ReachHigh.svg?branch=develop)](https://travis-ci.com/NedyUdombat/ReachHigh)
[![Maintainability](https://api.codeclimate.com/v1/badges/f7d60669bc1f2234a2cc/maintainability)](https://codeclimate.com/github/NedyUdombat/ReachHigh/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/NedyUdombat/ReachHigh/badge.svg?branch=develop)](https://coveralls.io/github/NedyUdombat/ReachHigh?branch=develop)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)


---

## Vision
ReachHigh is a digitized platform that helps in building a personalized career plan to help early-stage Sales & Marketing professionals improve their skills, and advance in their careers.

---


## API Spec
The preferred JSON object to be returned by the API should be structured as follows:

### Users (for authentication)

```source-json
{
  "user": {
    "email": "nedy@nedy.nedy",
    "token": "jwt.token.here",
    "username": "nedy",
  }
}
```

### Goal
```source-json
{
  [
    {
      "goal": {
        "id": 1.
        "title": "Be a better leader",
        "tasks": [
          {
            "title": "Have a career conversation with your direct reports",
            "description": "...",
            "duration": 90
          },
          {
            "title": "Solicit feedback from your direct reports",
            "description": "...",
            "duration": 60
          },
        ]
      }
    },
    {...}
  ]
}
```
### Task (Users tasks completed/not)
```source-json
{
  tasks: [
    {
      "title": "Have a career converBe a better leadersation with your direct reports",
      "description": "...",
      "duration": 90,
      "completed": true,
      "goal": "Be a better leader"
    },
    {
      "title": "Solicit feedback from your direct reports",
      "description": "...",
      "duration": 60,
      "completed": false,
      "goal": "Be a better leader"
    },
    {
      "title": "Write your personal brand statement",
      "description": "...",
      "duration": 120,
      "completed": true,
      "goal": "Personal Growth"
    }
  ]
}
```

### Errors and Status Codes
If a request fails any validations, expect errors in the following format:

```source-json
{
  "errors":{
    "body": '...'
  }
}
```
### Other status codes:
* 401 for Unauthorized requests, when a request requires authentication but it isn't provided
* 403 for Forbidden requests, when a request may be valid but the user doesn't have permissions to perform the action
* 404 for Not found requests, when a resource can't be found to fulfill the request
* 405 for Method not allowed, when a method does not exist in the API

Endpoints:
----------
API endpoint will be versioned in this format:
```$xslt
version 1 =  *{HOST}/api/v1/*
version 2 =  *{HOST}/api/v2/*
version 3 =  *{HOST}/api/v3/*
```

### Registration:

`POST /api/v1/auth/register`

Example request body:

```source-json
{
  "user":{
    "fullname": "John Doe"
    "username": "Johndoe",
    "email": "john@doe.john",
    "password": "johndoe1234"
  }
}
```

No authentication required, returns a User
Required fields: `email`, `username`, `password`

### Authentication:

`POST /api/v1/auth/login`

Example request body:

```source-json
{
  "user":{
     "email": "john@doe.john",
     "password": "johndoe1234"
  }
}
```

No authentication required, returns a User
Required fields: `email`, `password`


### GET ALL GOALS:

`GET /api/v1/goals`

Example request body: none

Authentication required, returns a list of all goals
Required fields: none


### GET ALL TASKS:

`GET /api/v1/goals/{goalsID}/task`

Example request body: none

Authentication required, returns a list of all tasks in a goal
Required fields: none

### GET SINGLE TASK:

`GET /api/v1/goals/{goalsId}/task/{taskId}`

Example request body: none

Authentication required, returns a particular task
Required fields: none


### COMPLETE SINGLE TASK:

`POST /api/v1/goals/{goalsId}/task/{taskId}`

Example request body:
```source-json
{
  "completed": true
}
```
Authentication required, returns a particular task
Required fields: none


### RESET SINGLE TASK:

`DELETE /api/v1/goals/{goalsId}/task/{taskId}`

Example request body:
```source-json
{
  "completed": false
}
```
Authentication required, returns a particular task
Required fields: none
