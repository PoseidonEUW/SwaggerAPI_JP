// Importation of modules
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Importation of routes
const peopleRouter = require('./router/peopleRouter');
const filmsRouter = require('./router/filmsRouter');
const planetsRouter = require('./router/planetsRouter');
const starshipsRouter = require('./router/starshipsRouter');
const speciesRouter = require('./router/speciesRouter');
const vehiculesRouter = require('./router/vehiculesRouter');

const app = express();
const port = 9000;

// Connection to MongoDB
// Must be changed to connect to the database
mongoose.connect('mongodb://localhost:27017/starwars', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Verification of the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
});

// Middleware to parse JSON
app.use(express.json());

// // Middleware auth don't work for the moment
// const authMiddleware = require('./middleware/auth');
// app.use(authMiddleware);

// Documentation Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/people', peopleRouter);
app.use('/api/films', filmsRouter);
app.use('/api/planets', planetsRouter);
app.use('/api/starships', starshipsRouter);
app.use('/api/species', speciesRouter);
app.use('/api/vehicules', vehiculesRouter);


// Launch of the server
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
