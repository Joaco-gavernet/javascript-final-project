// OBJETO CLIENTE ------------------------------------
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

// // Intento mostrar el producto agregado por la funcion para agregar productos al JSON
// console.log(productData);
// productData.push(productDataConstructorB("21 lecciones para el siglo 21", "2000", "Yuval Noah Harari", "", "#AAA002", "true"));
// console.log(productData[2]);

// Muestro los productos
console.log('Productos:');
productData.forEach(function (i) {
  // If para chequear que el producto este disponible y lo imprimo en la consola
  if (i.stock > 0) {
    return new Product(i).getProductData();
  }
})

// Intento de definir una variable tomando el "id" de cada instancia del objeto y poder llamarlo con ese nombre. Esto es por que en el caso anterior en el que instancio al objeto Product.js y lo imprimo en la consola con su metodo, no puedo volver a llamar a cada una de las instancias por su nombre
// function productInstancer (i, x) {
//   window[x] = new Product(i);
//   return window[x];
// }
// console.log(productInstancer(productData, productData.id));

// Defino las instancias de los objetos manualmente porque no pude plantear una funcion que les asigne un nombre acorde a la cantidad de productos instanciados en base al Json "products". 
// let product1 = new Product(productData[0]);
// let product2 = new Product(productData[1]);

// // Intento hacer un loop para definir las instancias y los nombres de las variables instanciadas automaticamente.
// // Defino la variable que indica la longitud del Json "productData" para pasarla como detonante en el parametro del "for"
// let size = productData.length;
// for (let i = 0; i < size; i++){
//   let example = new Product(productData[i]);
//   console.log(example);
// }

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