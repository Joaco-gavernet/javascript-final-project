// Variables
let cartCounter = document.querySelectorAll('.cartCounter');
let carrito = new Cart(); // instancio el carrito
// let productButton = document.querySelectorAll('.productButton'); // clases de los botones
// -------------------------------------------

// AGREGO PRODUCTOS
productData.push(productDataConstructor(
  "21 lecciones para el siglo 21", 
  "2000", 
  "Yuval Noah Harari", 
  "Planeta", 
  "Aca iria una descripcion del libro", 
  "img/21-lecciones-siglo-21.png", 
  "AAA004", 
  "5", 
  "true"))
// ------------------------------------

// CONSTRUCCION DE PRODUCTOS HTML 
productData.forEach(function (product) {
  if (product.isActive && document.querySelector('.productosCatalogo__ul') !== null) {
    let contenedorCatalogo = document.querySelector('.productosCatalogo__ul');
    contenedorCatalogo.innerHTML += productBuilder(product);
  }
})
// -------------------------------------------



// CORROBORO CANTIDAD DE PRODUCTOS EN EL CARRITO
if (cartCounter.textContent = undefined) {
  cartCounter.style.display = 'none';
}
// -------------------------------------------




// DomContentLoad
$(function() {
console.log( "The DOM is now loaded and can be manipulated." );



// Instancio automaticamente los productos del array ('productData.js') como objetos ('Product.js')
productData.forEach(product => {
  let instanceId = product.id;
  window['product' + instanceId] = new Product(product);
})



// APERTURA DEL CARRITO
var open = false;
$('.cartOpener').on('click', cartOpens);
function cartOpens() {
  if (!open) {
    $('.productosCatalogo').css('display', 'none');
    $('.selectedProducts-container').css('display', 'flex');
    open = true;
  } else {
    $('.productosCatalogo').css('display', 'flex');
    $('.selectedProducts-container').css('display', 'none');
    open = false;
  }
}
// -------------------------------------------



// SINCRONIZACION DEL BOTON -------------------------------------------
// Recorro la variable 'productButton' y le asigno a cada boton un 'EventListener'
let productButton = document.querySelectorAll('.productButton');
productButton.forEach( button => {
  button.onclick = (event) => {
    selectItem(event);
  }
})
// -------------------------------------------



// // ELIMINAR DEL CARRITO
// let selectedProductDelete = document.querySelectorAll('.selectedProductDelete')

// selectedProductDelete.forEach( product => {
//   product.onclick = (event) => {
//     deleteProduct(event)
//   }}
// )
// // -------------------------------------------




// FIN - DomContentLoad 
});