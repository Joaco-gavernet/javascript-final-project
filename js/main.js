// AGREGO PRODUCTOS
productData.push(productDataConstructor("21 lecciones para el siglo 21", "2000", "Yuval Noah Harari", "Planeta", "Aca iria una descripcion del libro", "img/21-lecciones-siglo-21.png", "AAA004", "5", "true"))
;
// ------------------------------------


let arrayProductsObject = [];

// Instancio automaticamente los productos del array ('productData.js') como objetos ('Product.js')
productData.forEach(product => {
  let instanceId = product.id;
  window['product' + instanceId] = new Product(product);
  arrayProductsObject.push('product' + instanceId)
})

console.log(arrayProductsObject)

// Prueba de las instancias de productos
productAAA000.getProductStock()
productAAA000.changeStock(+15)
productAAA000.getProductStock()






// // Agrego productos al carrito
// carrito.addNewProduct(product1, 1);
// carrito.addNewProduct(product2, 5);



// CONSTRUCCION DE PRODUCTOS HTML
let contenedorCatalogo = document.querySelector('.productosCatalogo__ul');

// document.querySelector
 
productData.forEach(function (product) {
  if (product.isActive) {
    contenedorCatalogo.innerHTML += productBuilder(product);
  }
})
// -------------------------------------------

// SINCRONIZACION DEL BOTON -------------------------------------------
// Ejecucion del carrito de compras
let carrito = new Cart();
// Variable para las clases de los botones
let productButton = document.querySelectorAll('.productButton');
// Variable para la cantidad de productos seleccionados
var amount = 0;

// Recorro la variable 'productButton' y le asigno a cada boton un 'EventListener' y la funcion 'countClick'
productButton.forEach( (button) => {
  button.onclick = (event) => {
    selectItem(event);
    // selectItemQuantity();
  }
})
// -------------------------------------------


// CORROBORO CANTIDAD DE PRODUCTOS EN EL CARRITO
let cartCounter = document.querySelector('.cartCounter');

if (!cartCounter.textContent) {
  cartCounter.style.display = 'none';
}
// -------------------------------------------

// APERTURA DEL CARRITO
let cartOpener = document.querySelector('.cartOpener');
cartOpener.addEventListener('click', cartOpens)

function cartOpens() {
  let selectedProductsContainer = document.querySelector('.selectedProducts-container');
  selectedProductsContainer.style.top = '0'
}
// -------------------------------------------