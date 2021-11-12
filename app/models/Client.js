/**
 * @author David Ignacio Martos <davidign1688@hotmail.com>
 * @version 1.0.0
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ClientSchema = Schema({

	name: String,
	lastName: String,
	phone: String

});

module.exports = mongoose.model('client',ClientSchema); 