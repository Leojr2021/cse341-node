const express = require('express');
const mongodb = require('./data/database')
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));


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


