const mongoose = require('mongoose');
const db = mongoose.connection;

// let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb://localhost:27017/ac_db'

// mongoose.connect(
//     'mongodb://localhost/ac_db', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }, () => {
//         console.log("Connected to Mongo")
//     }
// )

db.on("error", (err) => console.log(err.message + "\nIs Mongod not running?"));
db.on("connected", () => console.log("MongoDB connected!"));
db.on("disconnected", () => console.log("MongoDB disconnected."));

mongoose.Promise  = Promise;

module.exports = mongoose;