// Defino el array de productos en formato Json
let products = [
  // Array al que van a ingresar los productos que quiero que figuren en la pagina
  {
    "productName" : "El principito",
    "productPrice" : "1000",
    "productId" : "#AAA",
    "productCondition" : true
  }, 
  {
    "productName" : "Las malas",
    "productPrice" : "1500",
    "productId" : "#AAB",
    "productCondition" : true
  }
]

// Defino el array de clientes en formato Json
let clientData = [
  {
  "name" : "Joaquin",
  "surname" : "Gavernet",
  "phone" : "11 3248-8780",
  // En este caso, el usuario tiene instagram, pero puede no tenerlo
  "instagram" : "joaco_gavernet"
  },
  {
  "name" : "Nicolas",
  "surname" : "Serrano",
  "phone" : "221 234-4358"
  },
  {
  "name" : "Haroldo",
  "surname" : "Gavernet",
  "phone" : "11 5008-0560"
  }
];

// Muestro los clientes
console.log('Clientes:');
// value equivale al Json de clientes que ingresa en cada uno de los ciclos, llamados por el .forEach()
clientData.forEach(function(value){
  // Creo una instancia del objeto molde Client.js al que le paso el Json[0] entero para luego llamar a sus propiedades en el Client.js
  let client = new Client(value);
  // Devuelvo la informacion por medio del metodo "getClientData" (desarrollado en "Client.js") al que le paso el valor ".getFullName()" para usarlo de parametro en el metodo
  client.getClientData(client.getFullName())
});

// Muestro los productos
// // Inecesario
// console.log('Productos:');
// products.forEach(function (i) {
//   // If para chequear que el producto este disponible
//   if (i.productCondition) {
//     return new Product(i).getProduct();
//   }
// })

// Intento de ejecucion del carrito de compras
// let carrito = new Cart();
// // Agrego productos al carrito
// carrito.addNewProduct(products[0]);
// carrito.addNewProduct(products[1]);
// // Muestro el carrito
// carrito.getCart();