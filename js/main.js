// PETICION CON AJAX
$.ajax({
  type: 'GET',
  url: 'json/productDataAPI.txt',
  success: function(resp) {
let request = JSON.parse(resp)


// Variables
let carrito = new Cart(); // instancio el carrito
localStorage.clear() // vacio el Local Storage
// -------------------------------------

if (document.querySelector('.productosCatalogo__ul')) {
  request.forEach(function (product) {
    if (product.isActive) {
      let contenedorCatalogo = document.querySelector('.productosCatalogo__ul');
      contenedorCatalogo.innerHTML += productBuilder(product);
    }
  })
}


// funcion de la barra de busqueda
let searchBar = document.querySelector('.searchBar');
if (searchBar) {
  searchBar.addEventListener('keyup', () => {searchFor(request)});
}


let cartCounter = document.querySelectorAll('.cartCounter');
if (cartCounter.textContent = undefined) { // CORROBORO CANTIDAD DE PRODUCTOS EN EL CARRITO
  cartCounter.style.display = 'none';
}


// DomContentLoad
$(document).ready(function() {
console.log( "The DOM is now loaded and can be manipulated." );
// console.log(request)


  // APERTURA DEL CARRITO
  var cartOpen = false;
  $('.cartOpener').on('click', cartOpens);
  function cartOpens() {
    if (!cartOpen) {
      $('.productosCatalogo').css('display', 'none');
      $('.selectedProducts-container').css('display', 'flex');
      carrito.refresh()
      cartOpen = true;
    } else {
      $('.productosCatalogo').css('display', 'flex');
      $('.selectedProducts-container').css('display', 'none');
      cartOpen = false;
    }
  }


  // SINCRONIZACION DEL BOTON -------------------------------------------
  let productButton = document.querySelectorAll('.productButton');
  productButton.forEach( button => {
    button.onclick = (event) => {
      let id = event.target.dataset.id;
      request.forEach( product => {
        if (product.id == id) {
          carrito.addNewProduct(product);
        }
      })
    }
  })


  // SINCRONIZACION DEL BOTON -------------------------------------------
  let selectedProductDelete = document.querySelectorAll('.selectedProductDelete');
  selectedProductDelete.forEach( button => {
    button.onclick = (event) => {
      carrito.deleteProduct(event);
    }
  })


  // Sincronizacion de botones para administrar la cantidad de productos selccionados
  let up = document.querySelector('.up');
  let down = document.querySelector('.down');
  if (up && down) {
    up.addEventListener('click',  (event) => {increaseCount(event, up)})
    down.addEventListener('click', (event) => {decreaseCount(event, down)})
  }

  
}); // fin - DomContentLoad 
}, // fin - succes
error: function() {
  console.log('Error - Archivo no encontrado')
}
}); // fin - error
// ----------------------------------------------