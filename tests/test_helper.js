const mongoose = require('mongoose');
const User = require('../app/models/User');

// before((done) => {
// 	mongoose.connect('mongodb://mongo:27017/docker-node-mongo');
// 	mongoose.connection
// 		.once('open',()=>{done();})
// 		.on('error',(error) =>{
// 			console.warn('Error',error);
// 		})
// })

// beforeEach((done) => {
// 	mongoose.connection.collections.users.drop(()=>{
// 		done();
// 	})
// })