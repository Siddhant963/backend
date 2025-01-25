const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     description: {
          type: String,
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

module.exports = mongoose.model('categories', categorySchema);