const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.port || 8080;
const Routes = require('./routes/routes');
require('dotenv').config()

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', Routes);


app.listen(PORT, () => { console.log('Running on Port ' + PORT) });
