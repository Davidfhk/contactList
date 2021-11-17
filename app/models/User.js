/**
 * @author David Ignacio Martos <davidign1688@hotmail.com>
 * @version 1.0.0
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Contact = require('./Contact');

var UserSchema = Schema({

	name: String,
	lastName: String,
	phone: String,
	contacts: [Contact]

});

module.exports = mongoose.model('users',UserSchema); 