// DEPENDENCIES
require('dotenv').config();
const express = require('express');
const app = express(); 
const morgan = require("morgan");
const cors = require("cors");
const router = require("./controllers") // subject to change
const db = require('./db/connection'); // tenuously optional due to potential redundancy
const mongoose= require('mongoose');

// Global Variables
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const mongoURI = process.env.mongoURI + "ac_db";

// Security Configurations

const whitelist = ["http://localhost:3000/"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(
        new Error("Not allowed by CORS, domain needs to be added to whitelist")
      );
    }
  },
};


//Middleware
NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
mongoose.connect(
    mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => 
    {console.log("Connected to Mongo")}
)

app.get('/', (req, res) => {
    res.send("Hello world")
});

// Server Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}}`);
});