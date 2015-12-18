var mongoose = require('mongoose');

var env = require('./environment');


var dbUri = process.env.DATABASE_URL;

// connect to db
mongoose.connect(dbUri);

// export the connection
module.exports = mongoose;
