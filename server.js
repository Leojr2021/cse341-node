const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database')
const app = express();

// const mongoose = require('mongoose');


const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', require('./routes'));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });


// app.listen(process.env.PORT || 3000, () => {
//     console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
//   });


mongodb.initDb((err) =>{
    if(err){
        console.log(err);

    }
    else{
        app.listen(port,()=>{
            console.log(`Database is listening and node Running on port ${port}`)
        })
    }
});


