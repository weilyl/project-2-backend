# Project Overview

[Final Project - Heroku](https://acpc-api.herokuapp.com/)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description & Worksheet README.md | Incomplete
|Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 2| Wrap up Backend | Inomplete
|Day 3| Focus on [Front-end](https://github.com/weilyl/project-2-frontend) | Incomplete
|Day 4| jQuery/Mongoose Bug Fixes | Incomplete
|Day 5| MVP, Final Touches & Deployment | Incomplete
|Day 6| Present | Incomplete

## Project Description

The final result of this project will be a functional full-stack CRUD site and API utilizing MongoDB, Mongoose, and Express. The front end will mimic the stylings of Animal Crossing Pocket Camp and the backend will allow users to add new animals and clothing items, as well as view existing animals and clothing items, and update/delete existing pairings. 

## Google Sheet

[Seed Data](#) 


## Time/Priority Matrix 

- [Matrix](https://res.cloudinary.com/dd3nkph31/image/upload/v1596419399/GAProject02/backendmatrix_zrmdn6.png)

## Functional Components

#### MVP

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: | :---: | :---: | 
| Set up files | H | 0.5hr | 0.25hr |
| Initialize node.js & install dependencies | H | 0.5hr | 0.25hr |
| Set up dependencies, global variables, security configurations, middleware | H | 1hr | 0.5hr |
| Set up models | H | 0.5hr | 0.25hr | 
| Set up controllers and/or routes | H | 0.5hr | 0.25hr |
| Run Mongoose & confirm via Postman, MongoDB, node, local host, HTML | H | 2hr | 3hr | 
| Deployment | H | 2hr | 3hr | 
| Bug fixes | H | 3hr | 5hr|
|
| Total | H | 10hrs | 12.5hrs | 


#### PostMVP 

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Document Issues | M | 3hr | 0.5hr |
| Add clothing items, outfit-animal pairing names to schemas | L | 5hr | -hr |
| 
|
| Total | H | 23hrs| 13hrs | 

## Additional Libraries

Express, Mongoose, CORS, Morgan, Bootstrap, jQuery


## Code Snippet

```
animalSchema = new Schema ({
    name: String, 
    photo: String,
    photo-alt-text: String,
    outfit: {type: Schema.types.ObjectId, ref: "Outfit"}
})
```

```
outfitSchema = new Schema ({
    name: String,
    photo: String, 
    photo-alt-text: String,
    animal: {type: Schema.types.ObjectId, ref: "Animal"}
})
```


## Issues and Resolutions

Documentation of all major issues encountered and their resolution.

**ERROR**: 

What's wrong:

What's supposed to happen:

Error info?

**RESOLUTION**: 


**ERROR**:
`Error: connect ECONNREFUSED 127.0.0.1:3000` when repeating PUT request, but with edited controller (added if statements) to account for documents having already been referenced.

**RESOLUTION**:
Fixed if statements for base cases.


**ERROR**:
`404 Not Found` when issuing `PUT` request in Postman at `localhost:3000/match/5f2b8b4502e1b600177d0d9a/5f2b8e4d02e1b600177d0d9c` using object ID's for an existing animal object and an existing outfit object.

Attempted fixes: `.delete` to `.put` in routes, amended URI to `localhost:3000/animals/match/5f2b8b4502e1b600177d0d9a/5f2b8e4d02e1b600177d0d9c` , used `.push` in `makeMatch` controller to append documents into empty arrays rather than using `=`.

New error: `Error: socket hang up`.

Next fixes:
- remove base cases (if statements)
- use something other than PUT request?
- use .update
- tinker more with .push [blog](https://www.wlaurance.com/2017/04/mongoose-tip-push), [stackoverflow](https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose), [documentation](https://docs.mongodb.com/manual/reference/operator/update/push/)
- console-log within controllers for errors
- more functions inside functions

Tried: `ObjectId()`, `objectName.property._id`, `req.params.id`

**RESOLUTION**:
`.save()`. Thank you Rosemary for reading and understanding [this](https://markstarkman.com/blog/2011/09/15/mongodb-many-to-many-relationship-data-modeling/#:~:text=Introduction,for%20implementing%20them%20in%20mongoDB)

**ERROR**: Postman error `400 Bad Request. The request cannot be fulfilled due to bad syntax.` when testing PUT request on `localhost:3000/animals/:id`. Referenced [this](https://kinsta.com/knowledgebase/400-bad-request/) list of possible reasons for a `400 Bad Request` error to troubleshoot. 

Postman error:
```
{"code":79,"codeName":"UnknownReplWriteConcern","name":"MongoWriteConcernError","result":{"n":1,"opTime":{"ts":"6856107580809281537","t":5},"electionId":"7fffffff0000000000000005","ok":1,"writeConcernError":{"code":79,"codeName":"UnknownReplWriteConcern","errmsg":"No write concern mode named 'majority/' found in replica set configuration"},"$clusterTime":{"clusterTime":"6856107580809281537","signature":{"hash":"ZJZyqa/CXR1BM+4ILhe6onveBi0=","keyId":"6855417834831347715"}},"operationTime":"6856107580809281537"}}
```

**RESOLUTION**: 
Seola had the same error and shared the fix with me. `&w=majority` at the end of the mongoURI in `.env` should be deleted. She got the fix from [here](https://howtocreateapps.com/how-to-connect-mongodb-atlas-with-node-js-using-mongoose/). 

**ERROR**: 
Postman error `404 Not Found` when making a GET request on `localhost:3000/animals`. Empty brackets were expected on Postman and in browser (browser error: `Cannot GET /animals`). Issue may be due to combining routes/route handlers for both animals and outfits in single files. 

Attempted to submit a POST request with the following: 
```
{
    "name": "Chevre",
    "photo": "https://static.wikia.nocookie.net/acnl/images/e/eb/Chevre.png/revision/latest/scale-to-width-down/340?cb=20130905174716",
    "photo-alt-text": "Chevre from New Leaf on a transparent background wearing the Natty Tee"
}
```

Postman returned:

```
{
    "code": 79,
    "codeName": "UnknownReplWriteConcern",
    "name": "MongoWriteConcernError",
    "result": {
        "n": 1,
        "opTime": {
            "ts": "6856779902104895490",
            "t": 5
        },
        "electionId": "7fffffff0000000000000005",
        "ok": 1,
        "writeConcernError": {
            "code": 79,
            "codeName": "UnknownReplWriteConcern",
            "errmsg": "No write concern mode named 'majorityac_db' found in replica set configuration"
        },
        "$clusterTime": {
            "clusterTime": "6856779902104895490",
            "signature": {
                "hash": "Sc+elkVcSDoNIYO6tUDRBudCBdU=",
                "keyId": "6854717737982230531"
            }
        },
        "operationTime": "6856779902104895490"
    }
}
```
When commenting out all but .get() for animals:
```
Error: Route.post() requires a callback function but got a [object Undefined]
    at Route.<computed> [as post] (C:\Users\weily\Documents\seir-6-29\student\unit02\project-2-AC-API\project-2-backend\node_modules\express\lib\router\route.js:202:15)
``` 

**RESOLUTION**: 
When all outfits-related lines were commented out in `server.js`, the error was resolved.

**ERROR**: 

```
2020-08-03T05:00:04.294444+00:00 heroku[router]: at=info method=GET path="/" host=acpc-api.herokuapp.com request_id=7c4b6ea7-77eb-4749-abd5-2f5d28a7658b fwd="74.68.118.73" dyno=web.1 connect=0ms service=8ms status=500 bytes=404 protocol=https
2020-08-03T05:00:04.296279+00:00 app[web.1]: Error: Not allowed by CORS, domain needs to be added to whitelist
```

`Internal server error` occurred when deploying backend to Heroku.  

**RESOLUTION**: 

Attempt 1: Whitelist was updated from `https` to `http` for the heroku domain.
Attempt 2: Whitelist was updated from `http://acpc-api.herokuapp.com` to `http://herokuapp.com/`.
Attempt 3: Whitelist was updated from `http://herokuapp.com/` to `http://heroku.com`.
Attempt 4: `http://heroku.com` was removed from CORS whitelist.
Attempt 5: Updated mongoURI in `.env` with the URI from MongoDB Atlas. Issue resolved.

**ERROR**: 

```
2020-08-03T04:46:08.993617+00:00 app[web.1]: > project-2-backend@1.0.0 start /app
2020-08-03T04:46:08.993617+00:00 app[web.1]: > node server.js
2020-08-03T04:46:08.993618+00:00 app[web.1]:
2020-08-03T04:46:09.680069+00:00 app[web.1]: /app/server.js:17
2020-08-03T04:46:09.680110+00:00 app[web.1]: NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions));
2020-08-03T04:46:09.680111+00:00 app[web.1]: ^
2020-08-03T04:46:09.680112+00:00 app[web.1]:
2020-08-03T04:46:09.680113+00:00 app[web.1]: ReferenceError: corsOptions is not defined
```

"Application error" occurred when deploying backend to Heroku. 

**RESOLUTION**: 
Used `heroku logs --tail --app=acpc-api` in Command Prompt to find above error logs. Middleware was updated to define `corsOptions` and to include whitelist. 
