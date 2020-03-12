// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema
const creatorSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Anonymous'
  },
  image: {
    type: String,
    default: 'http://www.placekitten.com/200/200'
  },
  birthyear: String,
  deathyear: String
})

// TODO: Create Piece Schema
// HINT: include a creator field for using the Creator schema
const pieceSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Untitled'
  },
  image: {
    type: String,
    required: true
  },
  creator: creatorSchema,
  museum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Museum'
  }
});

// TODO: Use Piece schema to create Piece model
const Piece = mongoose.model('Piece', pieceSchema);

// TODO: Export Piece Model
module.exports = Piece;

// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!