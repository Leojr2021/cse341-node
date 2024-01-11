const express = require('express');
const { VincentRoute, RachelRoute } = require('./controllers/week01');
const app = express();

app.get('/', VincentRoute);
app.get('/rachel', RachelRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});