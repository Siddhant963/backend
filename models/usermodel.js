const mongoose = require('mongoosee');
const userSchema = mongoose.Schema(
     {
          name: String,
          email: String,
          password: String,
          contact : number,
          Orders : [],
          Address : String,
          cart : []
     }
);
module.exports = mongoose.model(user , userSchema);
