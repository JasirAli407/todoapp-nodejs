const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const db = require('./config/mongoose')
const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views','./views');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('assets'));

app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){
        console.log(`error: ${err}`)
        return;
    }
    console.log(`express server running on port:${port}`);

})

