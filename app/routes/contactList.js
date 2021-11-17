/**
 * @author David Ignacio Martos <davidign1688@hotmail.com>
 * @version 1.0.0
 */


'use strict';

const express = require('express');
const UserController = require('../controllers/user');
const ContactListController = require('../controllers/contactList');
const checkPhoneMw = require('../middleware/checkPhoneMw');
const validationResultMw = require('../middleware/validationResultMw');
const router = express.Router();
const validation = require('../handlers/validation');


router.post('/user',[validation.user,validationResultMw,checkPhoneMw],UserController.store);
router.put('/user/:id',[validation.contacts,validationResultMw,checkPhoneMw],ContactListController.store);
router.get('/user/:id',ContactListController.show);
router.get('/users/:id/:id2',ContactListController.showSameContacts);

module.exports = router;