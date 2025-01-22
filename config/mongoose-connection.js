const mongoose = require('mongoose');
const config = require('config');
const dugr = require('debug')("development:mongoose");

mongoose.connect(`${config.get("MONGODB_URI")}/Two_cups`)
.then(function(){ 
     dugr("Database connected");
})
.catch(function(err){ 
  dugr(err);
  
})
module.exports = mongoose.connection;