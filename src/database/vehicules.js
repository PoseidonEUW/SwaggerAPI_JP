const mongoose = require('mongoose');

const vehiculeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  cost_in_credits: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  max_atmosphering_speed: {
    type: String,
    required: true,
  },
  crew: {
    type: String,
    required: true,
  },
  passengers: {
    type: String,
    required: true,
  },
  cargo_capacity: {
    type: String,
    required: true,
  },
  consumables: {
    type: String,
    required: true,
  },
  vehicle_class: {
    type: String,
    required: true,
  },
  pilots: {
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

module.exports = mongoose.model('Vehicule', vehiculeSchema);
