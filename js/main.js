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


function productBuilder(product) {
  // let liProducto = document.createElement('li');
  // let contenedorProducto = document.createElement('div');
  // let portada = document.createElement('img');
  // let contenedorInfo = document.createElement('div');
  // let title = document.createElement('h2');
  // let author = document.createElement('h4');
  // let editorial = document.createElement('h4');
  // let description = document.createElement('p');
  // let price = document.createElement('h3')
  // let input = document.createElement('input');


  // portada.src = product.img;
  // title.textContent = product.title;
  // author.textContent = product.author;
  // editorial.textContent = product.editorial;
  // description.textContent = product.description;
  // price.textContent = product.price;
  // input.type = "button";
  // input.value = "Agregar";

  // liProducto.appendChild(contenedorProducto);
  // contenedorProducto.appendChild(portada);
  // contenedorProducto.appendChild(contenedorInfo);
  // contenedorInfo.appendChild(title);
  // contenedorInfo.appendChild(author);
  // contenedorInfo.appendChild(editorial);
  // contenedorInfo.appendChild(description);
  // contenedorInfo.appendChild(price);
  // contenedorInfo.appendChild(input);

  // return liProducto;

  let result = `
  <li class="productosCatalogo_ulLi">
    <div>
      <img src="${product.img}" alt="Portada de libro" class="productImg">
      <div>
        <h2 class="productTitle">${product.title}</h2>
        <h4 class="productSubtitle">${product.author}</h4>
        <h4 class="productSubtitle">${product.editorial}</h4>
        <p class="productDescription">${product.description}</p>
        <h3 class="productPrice">${product.price}</h3>
        <input type="button" id="buttonComprar" value="Agregar" class="productButton">
      </div>
    </div>
  </li>
  `;
  return result;
}

let contenedorCatalogo = document.querySelector('.productosCatalogo_ul');

productData.forEach(function (product){
  if (product.isActive) {
    contenedorCatalogo.innerHTML += productBuilder(product);
  }
})



// FIN DE INTENTO - FUNCION PARA CONTRUIR LOS PRODUCTOS -------------------------------------------