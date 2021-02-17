// Variables
let cartCounter = document.querySelectorAll('.cartCounter');
let carrito = new Cart(); // instancio el carrito
// -------------------------------------

// PETICION CON AJAX
$.ajax({
  type: 'GET',
  url: 'json/productDataAPI.txt',
  success: function(resp) {
    let request = JSON.parse(resp)
    // request.forEach(element => {console.log(element.tags)})

    request.forEach(product => {
      let instanceId = product.id;
      window['product' + instanceId] = new Product(product);
    })

    request.forEach(function (product) {
      if (product.isActive && document.querySelector('.productosCatalogo__ul') !== null) {
        let contenedorCatalogo = document.querySelector('.productosCatalogo__ul');
        contenedorCatalogo.innerHTML += productBuilder(product);
      }
    })
    
    let productButton = document.querySelectorAll('.productButton');
    productButton.forEach( button => {
      button.onclick = (event) => {
        selectItem(event);
      }
    })

    // funcion de la barra de busqueda
    let searchBar = document.querySelector('.searchBar');
    searchBar.addEventListener('keyup', () => {searchFor(request)});

  },
  error: function() {
    console.log('Error - Archivo no encontrado')
  }
});
// ----------------------------------------------

// // AGREGO PRODUCTOS
// productData.push(productDataConstructor(
//   "21 lecciones para el siglo 21", 
//   "2000", 
//   "Yuval Noah Harari", 
//   "Planeta", 
//   "Aca iria una descripcion del libro", 
//   "img/21-lecciones-siglo-21.png", 
//   "AAA004", 
//   "5", 
//   "true"))
// // ------------------------------------

// // CONSTRUCCION DE PRODUCTOS HTML 
// productData.forEach(function (product) {
//   if (product.isActive && document.querySelector('.productosCatalogo__ul') !== null) {
//     let contenedorCatalogo = document.querySelector('.productosCatalogo__ul');
//     contenedorCatalogo.innerHTML += productBuilder(product);
//   }
// })
// // -------------------------------------------



// CORROBORO CANTIDAD DE PRODUCTOS EN EL CARRITO
if (cartCounter.textContent = undefined) {
  cartCounter.style.display = 'none';
}
// -------------------------------------------




// DomContentLoad
$(document).ready(function() {
console.log( "The DOM is now loaded and can be manipulated." );


// Instancio automaticamente los productos del array ('productData.js') como objetos ('Product.js')


// APERTURA DEL CARRITO
var cartOpen = false;
$('.cartOpener').on('click', cartOpens);
function cartOpens() {
  if (!cartOpen) {
    $('.productosCatalogo').css('display', 'none');
    $('.selectedProducts-container').css('display', 'flex');
    cartOpen = true;
  } else {
    $('.productosCatalogo').css('display', 'flex');
    $('.selectedProducts-container').css('display', 'none');
    cartOpen = false;
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


// FIN - DomContentLoad 
});