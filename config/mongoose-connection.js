const mongoose = require('mongoose');
const config = require('config');
const dugr = require('debug')('development:mangoose');
const dotenv = require('dotenv');
require('dotenv').config();


mongoose.connect(`mongodb+srv://siddhantdubey867:swQeievR1JdUHcy7@cluster11.ws6sd.mongodb.net/Two_cups`)
.then(function(){ 
     console.log("Database connected");
})
.catch(function(err){ 
  dugr(err);
  
})
module.exports = mongoose.connection;