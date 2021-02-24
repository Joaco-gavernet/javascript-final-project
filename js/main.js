let resp = []; // inicializo variable que va a contener la peticion AJAX
document.addEventListener('DOMContentLoaded', readyFunction); // escucho la carga del DOM

function readyFunction () {
  console.log('DOMContentLoaded'); // aviso la carga
  ajaxPetition(); // ejecuto la peticion de AJAX
} 

function main() {
  let carrito = new Cart(resp); // instancio el carrito

  if (document.querySelector('.productosCatalogo__ul')) {
    let contenedorCatalogo = document.querySelector('.productosCatalogo__ul');
    resp.forEach(function (product) {
      if (product.isActive) {
        contenedorCatalogo.innerHTML += productBuilder(product);
      }
    })
  }

  // funcion de la barra de busqueda
  let searchBar = document.querySelector('.searchBar');
  if (searchBar) {
    searchBar.addEventListener('keyup', () => {searchFor(resp)});
  }


  let cartCounter = document.querySelectorAll('.cartCounter');
  if (cartCounter.textContent = undefined) { // CORROBORO CANTIDAD DE PRODUCTOS EN EL CARRITO
    cartCounter.style.display = 'none';
  }

  // Desde aca iba todo adentro del DOMContentLoaded

  // APERTURA DEL CARRITO
  var cartOpen = false;
  $('.cartOpener').on('click', cartOpens);
  function cartOpens() {
    if (!cartOpen) {
      $('.productosCatalogo').css('display', 'none');
      $('.selectedProducts-container').css('display', 'flex');
      // $('.selectedProducts__buyButton').click(event => {event.preventDefault()}) // preventDefault
      carrito.refresh();
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
      resp.forEach( product => {
        if (product.id == id) {
          carrito.addNewProduct(product);
          swal({
            title: "Producto agregado!", 
            icon: "success",
            buttons: false,
            timer: 1000
          });
        }
      })
    }
  })
}

function ajaxPetition () { // peticion AJAX
  $.ajax({
    type: 'GET',
    url: 'json/productDataAPI.json',
    success: function(request) {
      resp = request;
      console.log('AJAX Loaded');
      main();
    }, 
    error: function() {
      console.log('Error - Archivo no encontrado')
    }
  }); 
}
