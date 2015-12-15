var mongoose = require('mongoose');

var env = require('./environment');

var dbUri = env.MONGOLAB_URI ||
            'mongodb://localhost/' + env.SAFE_TITLE;


if (!env.MONGOLAB_URI) {
  // check that MongoD is running...
  require('net').connect(27017, 'localhost').on('error', function() {
    console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
    process.exit(0);
  });
}

// connect to db
mongoose.connect(dbUri);

// export the connection
module.exports = mongoose;