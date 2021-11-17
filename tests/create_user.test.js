'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'http://localhost/api';
const User = require('../app/models/User');

var userId = '';
var userId2 = '';

describe('Crear un usuario en el ecosistema Bnext', () => {
  it('Deberia retornar status 201', (done) => {
    chai.request(url)
      .post('/user')
      .set('Accept', 'application/json')
      .send({
        'name': 'David Ignacio',
        'lastName': 'Martos',
        'phone': 657546518
      })
      .end((err,res)=>{
        expect(res).to.have.status(201);
        userId = res.body._id;
        done();
      })
  })
})

describe('Guarda/Actualiza los contactos de la agenda de un usuario', function() {
  let body = [
    {
      "contactName" : "Alberto",
      "phone": 678906789            
    },
    {
      "contactName" : "Carlos",
      "phone": 670923456            
    }          
  ];

  it('Deberia retornar status 200 y el usuario deberia tener dos elementos en sus contactos', function(done) {
    chai.request(url)
      .put('/user/'+userId)
      .set('Accept', 'application/json')
      .send(body)
      .end((err,res)=>{
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('contacts').to.be.an('array').to.have.lengthOf(2);
        done();
      })
  })
})