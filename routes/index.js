const routes = require('express').Router();
const { VincentRoute, RachelRoute } = require('../controllers/week01');

routes.get('/', VincentRoute);
routes.get('/rachel', RachelRoute);

routes.use('/users', require('./users'))

module.exports = routes;