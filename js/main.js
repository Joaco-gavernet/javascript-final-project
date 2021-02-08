// Variables
let contenedorCatalogo = document.querySelector('.productosCatalogo__ul');
let cartCounter = document.querySelector('.cartCounter');
let carrito = new Cart(); // instancio el carrito
let productButton = document.querySelectorAll('.productButton'); // clases de los botones
let contenedorSelectedProducts = $('.selectedProducts'); // contenedor de los productos seleccionados
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
  if (product.isActive) {
    contenedorCatalogo.innerHTML += productBuilder(product);
  }
})
// -------------------------------------------



// CORROBORO CANTIDAD DE PRODUCTOS EN EL CARRITO
if (!cartCounter.textContent) {
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



// carrito.getCart()
// carrito.addNewProduct(productAAA000)



// APERTURA DEL CARRITO
var open = false;
$('.cartOpener').on('click', cartOpens);
function cartOpens() {
  if (!open) {
    $('.productosCatalogo').css('display', 'none');
    $('.selectedProducts-container').css('display', 'block');
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
productButton.forEach( (button) => {
  button.onclick = (event) => {
    selectItem(event);
  }
})
// -------------------------------------------



carrito.selection.forEach(product => {
  contenedorSelectedProducts.innerHTML += selectedProductBuilder(product);
})



// // ELIMINAR DEL CARRITO
// document.querySelector('.selectedProductDelete').onclick = (event) => {
//   console.log($('event.target').parent())
//   // deleteProduct(event)
// }
// // -------------------------------------------




// FIN - DomContentLoad 
});