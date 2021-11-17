/**
 * @author David Ignacio Martos <davidign1688@hotmail.com>
 * @version 1.0.0
 */

'use strict';

const neutrinoapi = require('../services/neutrinoapi');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

var checkPhoneMw = async(req,res,next) =>{
  if(req.method === 'PUT'){
    let contacts = req.body;

    contacts.forEach(async contact =>{
      await neutrinoapi.checkPhone(contact.phone,res,next);
      delay(1000);      
    })
  }else{
  // return res.status(200).send(req.body.phone);
  await neutrinoapi.checkPhone(req.body.phone,res,next);    
  }


}

module.exports = checkPhoneMw;