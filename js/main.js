// Intento de funcion para definir los productos
// let productDataConstructor = (title, price, author, editorial, id, condition) => {
//   productName : title;
//   productPrice : price;
//   productAuthor : author;
//   productEditorial : editorial;
//   productId : id;
//   productDisponibility : condition;
// };
// {productDataConstructor("La sombra del viento", "1500", "Carlos Ruiz Zafon", "Planeta", "#AAA002", true)}



// Defino el array de productos en formato Json
let productData = [
  // Array al que van a ingresar los productos que quiero que figuren en la pagina
  {
    title: "El principito",
    price: "1000",
    author: "",
    editorial: "",
    id: "#AAA000",
    stock: 10
  }, 
  {
    title: "Las malas",
    price: "1500",
    author: "",
    editorial: "",
    id: "#AAA001",
    stock: 10
  }
]

// Defino el array de clientes en formato Json. No estoy seguro de la utilidad de este array, no se si me sirve todavia para juntar informacion sobre los clientes que compran. 
let clientData = [
  {
  name: "Joaquin",
  surname: "Gavernet",
  phone: "11 3248-8780",
  // En este caso, el usuario tiene instagram, pero puede no tenerlo
  "instagram": "joaco_gavernet"
  },
  {
  name: "Nicolas",
  surname: "Serrano",
  phone: "221 234-4358"
  },
  {
  name: "Haroldo",
  surname: "Gavernet",
  phone: "11 5008-0560"
  }
];

// Muestro los clientes
console.log('Clientes:');
// value equivale al Json de clientes que ingresa en cada uno de los ciclos, llamados por el .forEach()
clientData.forEach(function(value){
  // Creo una instancia del objeto molde Client.js al que le paso el Json[0] entero para luego llamar a sus propiedades en el Client.js
  let client = new Client(value);
  // Devuelvo la informacion por medio del metodo "getClientData" (desarrollado en "Client.js") al que le paso el valor ".getFullName()" para usarlo de parametro en el metodo
  client.getClientData(client.getFullName());
});

// Muestro los productos
console.log('Productos:');
productData.forEach(function (i) {
  // If para chequear que el producto este disponible y en el caso de que sea "true" lo imprimo en la consola
  if (i.stock > 0) {
    return new Product(i).getProductData();
  }
})

// Intento de ejecucion del carrito de compras
// let carrito = new Cart();
// // Agrego productos al carrito
// carrito.addNewProduct(productData[0]);
// carrito.addNewProduct(productData[1]);
// // Muestro el carrito
// carrito.getCart();