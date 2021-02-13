// Variables
let productData = [];
let xhr;
// Comprobacion de la existencia del objeto (validacion para Internet Explorer)
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else {
  xhr = new ActiveXObject('Microsoft.XMLHTTP')
}
// -------------------------------------------

// // PETICION CON XMLHTTPREQUEST
// // escucho el estado
// xhr.addEventListener('readystatechange', () => {
//   // estado de carga 4 y status 200 (sin errores)
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     // parseo el contenido
//     console.log(JSON.parse(xhr.response))
//   }
// })
// // llamo al servidor
// xhr.open('GET', 'json/productDataAPI.txt')
// // xhr.send()
// -------------------------------------------

// // PETICION CON FETCH (get)
// let request = fetch('json/productDataAPI.txt')
// request 
//   .then(response => response.json())
//   .then(response => console.log(response))
// // -------------------------------------------

// // PETICION CON FETCH (post)
// let postPetition = fetch('json/productDataAPI.txt', {
//   method: 'POST',
//   body: ,
//   headers: {'Content-type': 'application/json'}
// })
// postPetition 
//   .then(response => response.json())
//   .then(response => console.log(response))
// // -------------------------------------------

// PETICION CON AJAX
$.ajax({
  type: 'GET',
  url: 'json/productDataAPI.txt',
  success: function(resp) {
    let request = JSON.parse(resp)
    console.log(request)

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
  },
  error: function() {
    console.log('Error - Archivo no encontrado')
  }
});
// ----------------------------------------------

// // POST CON AJAX
// $.ajax({
//   type: 'GET',
//   url: 'json/productDataAPI.txt',
//   data: dataACargar
// });
// // -------------------------------------------

// // PETICION CON AJAX (JSON)
// $.getJSON('json/productDataAPI.txt', function (data) {
//   console.log(data)
// })
// // -------------------------------------------