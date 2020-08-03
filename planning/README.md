# Project Overview

[Final Project - Heroku](#)

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
| Set up files | H | 0.5hr | -hr |
| Initialize node.js & install dependencies | H | 0.5hr | -hr |
| Set up dependencies, global variables, security configurations, middleware | H | 1hr | -hr |
| Set up models | H | 0.5hr | -hr | 
| Set up controllers and/or routes | H | 0.5hr | -hr |
| Run Mongoose & confirm via Postman, MongoDB, node, local host, HTML | H | 2hr | -hr | 
| Deployment | H | 2hr | -hr | 
| Bug fixes | H | 3hr | -hr|
|
| Total | H | 10hrs | -hrs | 


#### PostMVP 

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Document Issues | M | 3hr | -hr |
| Add clothing items, outfit-animal pairing names to schemas | L | 5hr | -hr |
| 
|
| Total | H | 23hrs| 13hrs | 

## Additional Libraries

Express, Mongoose, CORS, Morgan


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
