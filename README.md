
# [Backend Developer] Desarrollo de Producto [ESP]

Hola!, mi nombre es David Ignacio Martos y he realizado la prueba de la siguiente forma:

## API

Tenemos una API-REST hecha con NodeJs.
Donde se puede realizar peticiones de tipo

- POST
recurso: /user
Para crear un usuario
```
{
  "name":<nombre>,
  "lastName":<lastName>,
  "phone": <phone>
}
```

- PUT
recurso: /user/:id
Para guardar/actualizar los contactos de la agenda de un usuario
```
[
  {
    "contactName":<nombre>
    "phone":<phone>
  },
  {
    "contactName":<nombre>
    "phone":<phone>
  }

]
```
- GET
recurso: /user/:id
Para mostrar los datos de un contacto 
La response tendrá el siguiente formato:

```
{
  "_id": "string",
  "name": "string",
  "lastName": "string",
  "phone": 0,
  "contacts": [
    {
      "contactName": "string",
      "phone": 0
    }
  ],
  "__v": 0
}
```

- GET
recurso: /users/:id/:id2
Para mostrar los contactos comunes entre dos 
La response tendrá el siguiente formato:

```
{
  "sameContacts": [
    {
      "contactName": "string",
      "phone": 0
    }
  ]
}
```

## EJECUCIÓN

  Primero hay que añadir en el fichero .env el USER_ID y API_KEY de neutrinoapi

  ``docker-compose up -d --build``  

  la url para llamar a la api será:
    localhost/api

  He hecho uso de swagger para hacer la documentación y poder interactuar con la api, esto se encuentra en la ruta
    localhost/api/docs

  ``npm test``

  Para ejecutar los tests 
