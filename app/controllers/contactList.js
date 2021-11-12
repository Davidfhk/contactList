/**
 * @author David Ignacio Martos <davidign1688@hotmail.com>
 * @version 1.0.0
 */

'use strict';

exports.home = (req,res) =>{

    return res.status(200).send({message: "Test Contact List"})

}