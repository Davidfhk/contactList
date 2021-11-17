/**
 * @author David Ignacio Martos <davidign1688@hotmail.com>
 * @version 1.0.0
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ContactSchema = Schema({
	contactName: String,
	phone: String
},{ _id : false });

module.exports = ContactSchema; 