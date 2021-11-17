var request = require('request');




exports.checkPhone = (phone,res,next) =>{
  let params = {
      'user-id': process.env.NEUTRINOAPI_USER_ID,
      'api-key': process.env.NEUTRINOAPI_API_KEY,
      'number': phone
  };
  request.post(
      'https://neutrinoapi.net/phone-validate',
      {form: params},
      function (error, response, body) {
        let result = JSON.parse(body);
        if (!error && response.statusCode == 200) {   
          if(!result.valid) return res.status(response.statusCode).send({message:`El teléfono ${phone} es invalido`});
          next();
        }else{
          return res.status(response.statusCode).send(
            {message:`No se ha podido verificar el teléfono ${phone} ,${result['api-error-msg']}`});
        }
      }
  ); 
}
