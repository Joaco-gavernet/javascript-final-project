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





// INTENTO - FUNCION PARA DEFINIR PRODUCTOS ------------------------------------

// function productDataConstructorB (title, price, author, editorial, id, stock) {
//   let item = `
//   productName: ${title},
//   productPrice: ${price},
//   productAuthor: ${author},
//   productEditorial: ${editorial},
//   productId: ${id},
//   prductStock: ${stock}
//   `
//   let finalItem = stringify(item);
//   // let finalItem = JSON.parse(item);
//   console.log(typeof finalItem);
// }

// let productExample = productDataConstructorB("La sombra del viento", "1500", "Carlos Ruiz Zafon", "Planeta", "#AAA002", 2);

// // Intento mostrar el producto
// console.log(productExample);

// productData.push(productDataConstructorB("21 lecciones para el siglo 21", "2000", "Yuval Noah Harari", "", "#AAA002", "true"));

// FIN DE INTENTO - FUNCION PARA DEFINIR PRODUCTOS ------------------------------------





// INTENTO - FUNCION PARA INSTANCIAR AUTOMATICAMENTE LOS OBJETOS DE PRODUCTDATA.JS ------------------------------------


// // Intento de definir una variable tomando el "id" de cada instancia del objeto para llamarlo con ese nombre. Esto es por que en el caso anterior en el que instancio al objeto Product.js y lo imprimo en la consola con su metodo, no puedo volver a llamar a cada una de las instancias por su nombre
// function productInstancer (i, x) {
//   let product = new Product(i);
//   return product;
// }
// console.log(productInstancer(productData, productData.id));


// CONCLUSION: NO PUEDO HACER VARIAR EL NOMBRE DE LA VARIABLE SEGUN EL CONTADOR


// FIN DE INTENTO ------------------------------------






// INTENTO - LOOP PARA DEFINIR LAS INSTANCIAS Y LOS NOMBRES AUTOMATICAMENTE --------------------------------------


// // Defino la variable que indica la longitud del JSON "productData" para pasarla como detonante en el parametro del "for"
// let size = productData.length;
// for (let i = 0; i < size; i++){
//   let example = new Product(productData[i]);
//   console.log(example);
// }


// FIN DE INTENTO ------------------------------------





// // Defino las instancias de los objetos manualmente porque no pude plantear una funcion que les asigne un nombre acorde a la cantidad de productos instanciados en base al JSON "productData.js". 
// let product1 = new Product(productData[0]);
// let product2 = new Product(productData[1]);

// // Muestro los productos
// console.log('Productos:');
// productData.forEach(function (i) {
//   // corroboro disponibilidad y actividad
//   if ((i.stock > 0) && (i.isActive)) {
//     return new Product(i).getProductData();
//   }
// })

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





// INTENTO - FUNCION PARA CONTRUIR LOS PRODUCTOS ------------------------------------


/* CONSIGNAS:
- Construir el contenedor en HTML donde van a estar ubicados los productos del
- Guardar en una variable el contenedor
- 
*/
 
 
let contenedorCatalogo = document.querySelector('.productosCatalogo__ul');
 
function productBuilder(product) {
  return `
  <li class="productosCatalogo__ulLi">
      <img src="${product.img}" alt="Portada de libro" class="productImage">
      <div class="product">
        <h2 class="productTitle">${product.title}</h2>
        <h4 class="productAuthor">Autor: ${product.author}</h4>
        <h4 class="productEditorial">Editorial: ${product.editorial}</h4>
        <p class="productDescription">${product.description}</p>
        <h3 class="productPrice">$${product.price}</h3>
        <input type="button" value="Agregar" class="productButton" data-id="${product.id}">
      </div>
  </li>
  `;
}

productData.forEach(function (product){
  if (product.isActive) {
    contenedorCatalogo.innerHTML += productBuilder(product);
  }
})


// FIN DE INTENTO - FUNCION PARA CONSTRUIR LOS PRODUCTOS -------------------------------------------





// INTENTO - SINCRONIZACION DEL BOTON


let productButton = document.querySelectorAll('.productButton');
let selectedProducts = [];



// Encargada de asignar el producto al 'Cart.js'
function addNewProduct (event) {
  let productId = event.target.dataset.id;
  let selectedProduct = productData.filter( (productDataItem) => {
    (productDataItem.id == productId) ? (productDataItem) : false;
  } )
  selectedProducts.push(selectedProduct);
}


// Recorro la variable 'productButton' y le asigno a cada boton un 'EventListener'
productButton.forEach( (button) => {
  button.addEventListener('click', addNewProduct);
})