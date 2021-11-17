const { body, param } = require('express-validator/check');

exports.user =  [
    body('name')
        .exists().withMessage('name is required')
        .isString().withMessage('name should be a string')
        .notEmpty().withMessage('name cannot be empty'),
    body('lastName')
        .exists().withMessage('lastName is required')
        .isString().withMessage('lastName should be a string')
        .notEmpty().withMessage('lastName cannot be empty'),
    body('phone')
        .exists().withMessage('phone is required')
        .isString().withMessage('phone should be a string')
        .notEmpty().withMessage('phone cannot be empty')
];

exports.contacts = [
    body().isArray()
        .custom( items =>{
            items.forEach((contact) =>{
                if(contact.contactName === "" || contact.contactName === undefined){
                    throw new Error('contactName is required');
                }
                if(contact.phone === "" || contact.phone === undefined){
                    throw new Error('phone is required');
                }
            })
            return true;
        })  
]