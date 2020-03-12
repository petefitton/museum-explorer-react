// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema
const museumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  country: String,
  city: String,
  image: {
    type: String,
    default: 'http://www.placekitten.com/600/400'
  }
});

// TODO: Use schema to create model
const Museum = mongoose.model('Museum', museumSchema);

// TODO: Export Museum Model
module.exports = Museum;