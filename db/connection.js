const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/ac_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("Connected to Mongo")
    }
)

mongoose.Promise  = Promise;

module.exports = mongoose;