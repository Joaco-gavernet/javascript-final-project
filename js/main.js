// AGREGO PRODUCTOS
productData.push(productDataConstructor("21 lecciones para el siglo 21", "2000", "Yuval Noah Harari", "Planeta", "Aca iria una descripcion del libro", "img/21-lecciones-siglo-21.png", "AAA002", "5", "true"))
;
// ------------------------------------






// // Defino las instancias de los objetos manualmente porque no pude plantear una funcion que les asigne un nombre acorde a la cantidad de productos instanciados en base al JSON "productData.js".
// let product1 = new Product(productData[0]);
// let product2 = new Product(productData[1]);

// // Los almaceno en un array para despues poder buscarlos y utilizar sus metodos
// let arrayProductsObject = [];
// arrayProductsObject.push(product1, product2);
// console.log(arrayProductsObject);

// // Muestro los productos
// console.log('Productos:');
// productData.forEach(function (i) {
//   // corroboro disponibilidad y actividad
//   if ((i.stock > 0) && (i.isActive)) {
//     return new Product(i).getProductData();
//   }
// })

// // Agrego productos al carrito
// carrito.addNewProduct(product1, 1);
// carrito.addNewProduct(product2, 5);

// // Muestro el carrito
// carrito.getCart();
// carrito.getTotal();

// // Ejemplo de recargo de stock
// product2.changeStock(+15);





// CONSTRUCCION DE PRODUCTOS
let contenedorCatalogo = document.querySelector('.productosCatalogo__ul');
 
productData.forEach(function (product){
  if (product.isActive) {
    contenedorCatalogo.innerHTML += productBuilder(product);
  }
})
// -------------------------------------------





// INTENTO - SINCRONIZACION DEL BOTON -------------------------------------------

// Ejecucion del carrito de compras
let carrito = new Cart();
let productButton = document.querySelectorAll('.productButton');
var amount = 0;


// Asigna el producto al 'Cart.js' buscandolo por su 'id', presente en la llamada del boton
function addNewProduct (event) {
  let productId = event.target.dataset.id;
  let selectedProduct = productData.filter( (productDataItem) => {
    if (productDataItem.id == productId) {
      return productDataItem;
    }
  })
  carrito.addNewProduct(selectedProduct, amount)
}

// Funcion para contar la cantidad de productos a sumar
function countClick() {
  amount += 1;
}


// Recorro la variable 'productButton' y le asigno a cada boton un 'EventListener' y la funcion 'countClick'
productButton.forEach( (button) => {
  button.onclick = (event) => {
    addNewProduct(event);
    countClick();
  }
})

// FIN DE INTENTO - SINCRONIZACION DEL BOTON -------------------------------------------