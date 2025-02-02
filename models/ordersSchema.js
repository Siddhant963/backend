const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
     user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
     },
     products: [
          {
               product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
               },
               productname: {
                    type: String,
                    required: true
               },
               price: {
                    type: Number,
                    required: true
               },
               
               quantity: {
                    type: Number,
                    required: true
               }
          }
     ],
     status: {
          type: String,
          required: true,
          default: 'Pending'
     },
     totalPrice: {
          type: Number,
          required: true
     },
     contact :{
          type: Number,
          required: true
     },
     email: {
          type: String,
          required: true
     }

},

     {
          timestamps: true
     });
module.exports = mongoose.model('Orders', orderSchema);