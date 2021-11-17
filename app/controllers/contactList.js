/**
 * @author David Ignacio Martos <davidign1688@hotmail.com>
 * @version 1.0.0
 */

'use strict';
const User = require('../models/User');
var mongoose = require('mongoose');

exports.store = (req,res) =>{
    let userId = req.params.id;
    let contacts = req.body;
    
    User.findById( userId, (err,userFound) =>{
        if(!userFound) return res.status(404).send({message: "There is no user to update"});

        contacts.forEach(contact =>{
            userFound.contacts.push(contact);
        });

        userFound.save((err,userUpdated) =>{
            if(err) return res.status(500).send({message:"Failed to save contacts"});

            if(!userUpdated) return res.status(404).send({message:"Contacts could not be saved"});

            return res.status(200).send(userUpdated);            
        })
    })
}

exports.show = (req,res) =>{
    let userId = req.params.id;
    
    User.findById( userId, (err,userFound) =>{
        if(err) return res.status(500).send({message: "Failed to display user"});

        if(!userFound) return res.status(404).send({message: "User does not exist"});

        return res.status(200).send({userFound});
    })
}

exports.showSameContacts = (req,res) => {
    let userId = req.params.id;
    let secondUser = req.params.id2;

    let query = User.find({
            '_id':{ $in: [
                mongoose.Types.ObjectId(userId),
                mongoose.Types.ObjectId(secondUser)
            ]}
        }).select({"contacts":1, "_id":0});

    query.exec((err, users) =>{
        if(err) return res.status(500).send({message: "Error displaying users"});

        let contactList = users.map(user =>{ return user.contacts});
        let sameContacts = contactList[1].filter(
            secondContactList => contactList[0].find(
                firstContactList => secondContactList.contactName === firstContactList.contactName && 
                                    secondContactList.phone === firstContactList.phone))

        return res.status(200).send({sameContacts});
    })
}

