// Defino el array de productos en formato Json
let products = [
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
  "phone" : "11 3248-8780"
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
clientData.forEach(function(value){
  let client = new Client(value);
  client.getFullName();
  client.getContact();
});

// Muestro los productos
console.log('Productos:');
products.forEach(function (i) {
  // If para chequear que el producto este disponible
  if (i.productCondition) {
    return new Product(i).getProduct();
  }
})

// Intento de ejecucion del carrito de compras
let carrito = new Cart();
// Agrego productos al carrito
carrito.addNewProduct(products[0]);
carrito.addNewProduct(products[1]);
// Muestro el carrito
carrito.getCart();