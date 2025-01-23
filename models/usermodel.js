const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
     {
          name: String,
          email: String,
          password: String,
          contact : Number,
          Orders : [],
          Address : String,
          cart : []
     }
);
module.exports = mongoose.model('users' , userSchema);
