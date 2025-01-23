const mongoose = require('mongoose');
const config = require('config');
const dugr = require('debug')('development:mangoose');

mongoose.connect(`mongodb://127.0.0.1:27017/Two_cups`)
.then(function(){ 
     dugr("Database connected");
})
.catch(function(err){ 
  dugr(err);
  
})
module.exports = mongoose.connection;