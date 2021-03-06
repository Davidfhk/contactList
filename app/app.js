/**
 * @author David Ignacio Martos <davidign1688@hotmail.com>
 * @version 1.0.0
 */

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Loading routes

var contactListRoutes = require('./routes/contactList');

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Cors

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Route

app.use('/api',contactListRoutes);

// Export our server

module.exports = app;