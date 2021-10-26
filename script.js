const json = {
    "localidade 1": {
     "Continente": "África",
     "País": "Angola",
     "Capital": "Luanda"
    },
    "localidade 2": {
     "Continente": "América do Norte",
     "País": "Estados Unidos",
     "Capital": "Washington DC"
    },
    "localidade 3": {
     "Continente": "América Central",
     "País": "México",
     "Capital": "Cidade do México"
    },
    "localidade 4": {
     "Continente": "América do Sul",
     "País": "Brasil",
     "Capital": "Brasília"
    },
    "localidade 5": {
     "Continente": "Europa",
     "País": "Espanha",
     "Capital": "Madri"
    },
    "localidade 6": {
     "Continente": "Europa",
     "País": "Alemanha",
     "Capital": "Berlim"
    },
    "localidade 7": {
     "Continente": "Oceania",
     "País": "Austrália",
     "Capital": "Camberra"
    },
     "localidade 8": {
     "Continente": "Ásia",
     "País": "Japão",
     "Capital": "Tóquio"
    }
   };

/////////////////////////////////////Código para obtener el país de la localidade 8//////////////////////////

console.log(json["localidade 8"].País);

//////////////////////////Código que permite añadir una localidad a tu elección/////////////////////////////

json["localidade 9"] = {
    "Continente": "África",
    "País": "Tanzania",
    "Capital": "Dodoma"
}

console.log(json["localidade 9"])

///////////////////Modifica la localidade 4, añadiendo el número de habitantes//////////////////////////////

json["localidade 4"]["Número de habitantes"] = 230000;

console.log(json["localidade 4"])

//////////////////////////////////////Cambia la estructura del JSON de forma que sea más directo acceder a las capitales de las localidades, dado que va a ser el dato que más vamos a consultar/////////////////////////////

//En el lugar donde pone "localidade n" pondría el nombre de la capital

// Traslada tu BD del Ejercicio 1 de BD Relacionales a formato JSON, ¿cómo almacenarías la información para que sea accesible y no lleve a equívocos?
// Enunciado del ejercicio 1: A partir del siguiente enunciado se desea realiza el modelo entidad-relación. “Una empresa vende productos a varios clientes. Se necesita conocer los datos personales de los clientes (nombre, apellidos, dni, dirección y fecha de nacimiento). Cada producto tiene un nombre y un código, así como un precio unitario. Un cliente puede comprar varios productos a la empresa, y un mismo producto puede ser comprado por varios clientes. Los productos son suministrados por diferentes proveedores. Se debe tener en cuenta que un producto sólo puede ser suministrado por un proveedor, y que un proveedor puede suministrar diferentes productos. De cada proveedor se desea conocer el NIF, nombre y dirección”.

const bd = {
    "clientes":{
        "Id_cliente": 1521,
        "Nombre": "Carlos",
        "Apellidos": "De Habsburgo",
        "DNI": "00000001V", 
        "Dirección": "Avenida de los Reyes Católicos 21",
        "Fecha de nacimiento": "24/02/1500"
    },
    "productos":{
        "Id_producto": 67354,
        "Nombre": "langosta",
        "Código": 152104,
        "Precio Unitario": 600
    },
    "proveedores":{
        
    }
}