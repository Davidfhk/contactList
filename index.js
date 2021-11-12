/**
 * @author David Ignacio Martos <davidign1688@hotmail.com>
 * @version 1.0.0
 */

'use strict';

// Loading mongoose
var mongoose = require('mongoose');

// Loading server
var app = require('./app/app');

// mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mongo:27017/docker-node-mongo',{useNewUrlParser: true})
		.then(()=>{
			console.log('MongoDB Connected');
		})
		.catch(err => console.log(err));

const port = 3000;

app.listen(port, () => console.log('Server running...'));