const mongoose = require('mongoose');

const speciesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  classification: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  average_height: {
    type: String,
    required: true,
  },
  skin_colors: {
    type: String,
    required: true,
  },
  hair_colors: {
    type: String,
    required: true,
  },
  eye_colors: {
    type: String,
    required: true,
  },
  average_lifespan: {
    type: String,
    required: true,
  },
  homeworld: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  people: {
    type: [String],
    required: true,
  },
  films: {
    type: [String],
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
  edited: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Species', speciesSchema);
