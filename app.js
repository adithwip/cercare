const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const location = require('./routes/placeSearch')
const photos = require('./routes/photos')

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use('/api', location)
app.use('/api', photos)

app.listen(3001)
