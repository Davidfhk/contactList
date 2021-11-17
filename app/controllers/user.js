/**
 * @author David Ignacio Martos <davidign1688@hotmail.com>
 * @version 1.0.0
 */

'use strict';
const User = require('../models/User');

exports.store = (req,res) =>{
    let user = new User;
    let params = req.body;

    user.name = params.name;
    user.lastName = params.lastName;
    user.phone = params.phone;

    user.save((err,userStored) =>{
        if(err) return res.status(500).send({message:"Failed to save user"});

        if(!userStored) return res.status(404).send({message:"User could not be saved"});

        return res.status(201).send(userStored);
    })
}