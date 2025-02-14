const mongoose = require('mongoose');
const config = require('config');
const dugr = require('debug')('development:mangoose');
const dotenv = require('dotenv');
require('dotenv').config();


mongoose.connect(`mongodb+srv://siddhantdubey867:<db_password>@cluster11.ws6sd.mongodb.net/Two_cups?retryWrites=true&w=majority&appName=Cluster11`)
.then(function(){ 
     console.log("Database connected");
})
.catch(function(err){ 
  console.log(err);
  
})
module.exports = mongoose.connection;