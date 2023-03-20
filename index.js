const express = require('express');
const mongoose = require('mongoose');
// Import routes
const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/starwars', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB:', err);
});

const app = express();

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
