const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     categoryId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Categories',
          required: true
     },
     description: {
          type: String,
          required: true
     },
     price: {
          type: Number,
          required: true
     },
     imageUrl: {
          type: String,
          required: true
     },
     createdAt: {
          type: Date,
          default: Date.now
     },
     removeAt: {
          type: Date,
          default: null
     }


})

module.exports = mongoose.model('Products', ProductSchema);