const routes = require('express').Router();
// const { VincentRoute, RachelRoute } = require('../controllers/week01');

// routes.get('/', VincentRoute);
// routes.get('/rachel', RachelRoute);


routes.use('/', require('./swagger'));
routes.get('/', (req,res)=>{
    //#swagger.tag=['Hello World']
    res.send('Hello World');
});

routes.use('/users', require('./users'))

module.exports = routes;