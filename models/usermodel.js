const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
     {
          name: String,
          email: String,
          password: String,
          contact : Number,
          isadmin:{
              type: Boolean,
              default: false,
          },
          address : String,
          
     }
);
module.exports = mongoose.model('users' , userSchema);
