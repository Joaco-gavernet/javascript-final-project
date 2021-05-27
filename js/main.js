let resp = []; // inicializo variable que va a contener la peticion AJAX
document.addEventListener('DOMContentLoaded', readyFunction); // escucho la carga del DOM

function readyFunction () {
  console.log('DOMContentLoaded'); // aviso la carga
  ajaxPetition(); // ejecuto la peticion de AJAX
} 

function main() {
  let carrito = new Cart(resp); // instancio el carrito

  $(".portada__linkForm").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".contactanos").offset().top
    }, 1000);
  });

  $(".portada__linkConocenos").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".conocenos").offset().top
    }, 1000);
  });

  $('.footerDesktop__img').click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("main").offset().top
    }, 1000);
  })

  if (!document.querySelector('.productosCatalogo__ul')) {
    document.querySelector('#buttonSubmitForm').addEventListener('click', (event) => {
      // event.preventDefault();
      console.log(event.target);
      getFormData();
      alert('Aun no es funcional este formulario')
    })
  }
  
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

  // futura logica para mostrar el contador de elementos en el carrito 
  // let cartCounter = document.querySelector('.cartCounter');
  // let localSelection = getFromLocal('cartSelection');
  // if (Object.keys(localSelection).length === 0) {
  //   console.log('Local Selection is empty');
  //   cartCounter.style.display = 'none';
  // } else {
  //   // cartCounter.textContent = localSelection.quantity;
  //   localSelection.quantity;
  // }

  // Desde aca iba todo adentro del DOMContentLoaded

  // APERTURA DEL CARRITO
  var cartOpen = false;
  $('.cartOpener').on('click', cartOpens);
  function cartOpens() {
    if (!cartOpen) {
      openCart();
      $('.selectedProducts__buyButton').click(closeCart)
      carrito.refresh();
      cartOpen = true;
    } else {
      closeCart();
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
