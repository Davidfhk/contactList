/**
 * @author David Ignacio Martos <davidign1688@hotmail.com>
 * @version 1.0.0
 */


'use strict';

var express = require('express');
var ContactListController = require('../controllers/contactList');

var router = express.Router();
router.get('/',ContactListController.home);

module.exports = router;