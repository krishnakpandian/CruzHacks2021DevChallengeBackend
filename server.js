//server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8080;
const Routes = require('./routes/routes');
require('dotenv').config()

// Set up Express Server
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/', Routes);

module.exports = {app};