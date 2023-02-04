require('dotenv').config();
const express = require('express');
const db = require('./libs/Mongoose');

// Initialization
const app = express();
db();
// Setting
app.set('PORT',process.env.PORT || 3000);


// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))


module.exports = app;