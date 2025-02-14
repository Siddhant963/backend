const mongoose = require('mongoose');
const config = require('config');
const dugr = require('debug')('development:mangoose');
const dotenv = require('dotenv');
require('dotenv').config();


mongoose.connect(`${process.env.MONGODB_URI}`)
.then(function(){ 
     console.log("Database connected");
})
.catch(function(err){ 
  dugr(err);
  
})
module.exports = mongoose.connection;