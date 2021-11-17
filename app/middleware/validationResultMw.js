
const { validationResult } = require('express-validator/check');

var validationResultMw = (req,res,next)=>{
	try {
		let result = validationResult(req);
		if(result.errors.length > 0){
		    return res.status(500).json({
		        title: 'an error occured',
		        error: result
		    });
		}
		next();
	} catch (err) {
		res.status(400).json(err);
	}        
}

module.exports = validationResultMw;