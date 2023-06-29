const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  episode_id: {
    type: Number,
    required: true,
  },
  opening_crawl: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  producer: {
    type: String,
    required: true,
  },
  release_date: {
    type: String,
    required: true,
  },
  characters: {
    type: [String],
    required: true,
  },
  planets: {
    type: [String],
    required: true,
  },
  starships: {
    type: [String],
    required: true,
  },
  vehicles: {
    type: [String],
    required: true,
  },
  species: {
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

module.exports = mongoose.model('Film', filmSchema);
