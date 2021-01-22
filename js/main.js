// OBJETO CLIENTE ------------------------------------

// // Defino el array de clientes en formato Json. No estoy seguro de la utilidad de este array, no se si me sirve todavia para juntar informacion sobre los clientes que compran. 
// let clientData = [
//   {
//     "name": "Joaquin",
//     "surname": "Gavernet",
//     "phone": "11 3248-8780",
//     //  En este caso, el usuario tiene instagram, pero puede no tenerlo
//     "instagram": "joaco_gavernet"
//   },
//   {
//     "name": "Nicolas",
//     "surname": "Serrano",
//     "phone": "221 234-4358"
//   },
//   {
//     "name": "Haroldo",
//     "surname": "Gavernet",
//     "phone": "11 5008-0560"
//   }
// ];

// // Muestro los clientes
// console.log('Clientes:');
// // value equivale al Json de clientes que ingresa en cada uno de los ciclos, llamados por el .forEach()
// clientData.forEach(function(value){
//   // Creo una instancia del objeto molde Client.js al que le paso el Json[0] entero para luego llamar a sus propiedades en el Client.js
//   let client = new Client(value);
//   // Devuelvo la informacion por medio del metodo "getClientData" (desarrollado en "Client.js") al que le paso el valor ".getFullName()" para usarlo de parametro en el metodo
//   client.getClientData(client.getFullName());
// });

// FIN OBJETO CLIENTE ---------------------------------

// Intento de funcion para definir los productos
// let productDataConstructor = (title, price, author, editorial, id, condition) => {
//   productName : title;
//   productPrice : price;
//   productAuthor : author;
//   productEditorial : editorial;
//   productId : id;
//   productDisponibility : condition;
// };

// function productDataConstructorB (title, price, author, editorial, id, condition) {
//   let item = `
//   productName: "${title}",
//   productPrice: "${price}",
//   productAuthor: "${author}",
//   productEditorial: "${editorial}",
//   productId: "${id}",
//   prductStock: "${condition}"
//   `
//   JSON.parse(item);
//   return item;
// }

// {productDataConstructor("La sombra del viento", "1500", "Carlos Ruiz Zafon", "Planeta", "#AAA002", true)}



// Defino el array de productos en formato Json
let productData = [
  // Array al que van a ingresar los productos que quiero que figuren en la pagina
  {
    "title": "El principito",
    "price": "1000",
    "author": "Marcos",
    "editorial": "Marea",
    "id": "#AAA000",
    "stock": 10
  }, 
  {
    "title": "Las malas",
    "price": "1500",
    "author": "Silvia",
    "editorial": "Planeta",
    "id": "#AAA001",
    "stock": 10
  }
]

// // Intento mostrar el producto agregado por la funcion para agregar productos al JSON
// console.log(productData);
// productData.push(productDataConstructorB("21 lecciones para el siglo 21", "2000", "Yuval Noah Harari", "", "#AAA002", "true"));
// console.log(productData[2]);

// // Muestro los productos
// console.log('Productos:');
// productData.forEach(function (i) {
//   // If para chequear que el producto este disponible y lo imprimo en la consola
//   if (i.stock > 0) {
//     return new Product(i).getProductData();
//   }
// })

// Intento de definir una variable tomando el "id" de cada instancia del objeto y poder llamarlo con ese nombre. Esto es por que en el caso anterior en el que instancio al objeto Product.js y lo imprimo en la consola con su metodo, no puedo volver a llamar a cada una de las instancias por su nombre
// function productInstancer (i, x) {
//   window[x] = new Product(i);
//   return window[x];
// }
// console.log(productInstancer(productData, productData.id));

// Defino las instancias de los objetos manualmente porque no pude plantear una funcion que les asigne un nombre acorde a la cantidad de productos instanciados en base al Json "products". 
// let product1 = new Product(productData[0]);
// let product2 = new Product(productData[1]);

// Intento hacer un loop para definir las instancias y los nombres de las variables instanciadas automaticamente.
// Defino la variable que indica la longitud del Json "productData" para pasarla como detonante en el parametro del "for"
let size = productData.length;
for (let i = 0; i < size; i++){
  let example = new Product(productData[i]);
  console.log(example);
}

// // Declaro una funcion que te devuelve los valores de referencia de la instancia ya creada. Es poco practico ya que deberia poder ser integrado como metodo en cada una de las instancias pero funciona. 
// let printProductReferences = x => console.log(x.productId, x.productTitle);

// // Declaro otra funcion que unicamente devuelve el Id
// let getProductId = x => x.productId;

// // Llamo a la funcion
// printProductReferences(product1);
// printProductReferences(product2);


// // Ejecucion del carrito de compras
// let carrito = new Cart();
// // Agrego productos al carrito
// carrito.addNewProduct(product1, 1);
// carrito.addNewProduct(product2, 5);
// // Muestro el carrito
// carrito.getCart();
// carrito.getTotal();


// // Ejemplo de recargo de stock
// product2.changeStock(+15);