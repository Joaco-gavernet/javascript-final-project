// FUNCION - DOM BUILDER DE LOS PRODUCTOS EN PRODUCTDATA.JS ------------------------------------
function productBuilder(product) {
  return `
  <li class="productosCatalogo__ulLi"  data-id="${product.id}">
      <img src="${product.img}" alt="Portada de libro" class="productImage">
      <div class="product">
        <h2 class="productTitle">${product.title}</h2>
        <h4 class="productAuthor">Autor: ${product.author}</h4>
        <h4 class="productEditorial">Editorial: ${product.editorial}</h4>
        <p class="productDescription">${product.description}</p>
        <h3 class="productPrice">$${product.price}</h3>
        <input type="button" value="Agregar" class="productButton" onclick="selectItem(event)" data-id="${product.id}">
      </div>
  </li>
  `;
}
// ------------------------------------


// FUNCION - selectedProductBuilder
function selectedProductBuilder(product) {
  return `
  <li class="selectedProductsLi">
    <img src="${product.img}" alt="" class="selectedProductsLi__img">
    <div class="selectedProduct">
      <h3 class="selectedProductTitle">${product.title}</h3>
      <h4 class="selectedProductInfo">${product.author} - ${product.editorial}</h4>
      <h4 class="selectedProductPrice">$${product.price}</h4>
    </div>

    <div class="selectedProductInfo">
      <div class="selectedProductCounter">
        <span class="counterSpan down">-</span>
        <input type="text" value="1" class="counterInput">
        <span class="counterSpan up" >+</span>
      </div>
      <img src="img/delete.png" alt="Eliminar producto" class="selectedProductDelete" data-id="${product.id}">
    </div>
  </li>
  `;
}
// --------------------------------------


// FUNCION - para la barra de busquedas
function searchFor (json) {
  let barValue = document.querySelector('.searchBar').value.toLowerCase().trim() // tomo el valor ingresado y lo paso a minuscula para compararlo con los tags
  if (barValue) { // si existe un valor en barValue
    json.forEach((product) => { // recorro el json que devuelve la request de Ajax
      let tags = JSON.stringify(product.tags) // modifico el objeto para compararlo directamente como string
      if (!tags.includes(barValue)) { // corroboro si no incluye el valor ingresado
        $(`.productosCatalogo__ulLi[data-id="${product.id}"]`).hide(); // oculto el elemento
      } else {
        $(`.productosCatalogo__ulLi[data-id="${product.id}"]`).show(); // si lo incluye, lo muestro
      }
    })
  } else if (!barValue) {
    $(`.productosCatalogo__ulLi`).show(); // si no hay barValue ingresado, muestro todos 
  }
}
// --------------------------------------


// FUNCION - administra cantidad de productos seleccionados
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10); 
  value = isNaN(value)? 0 : value;
  value ++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10); 
  if (value > 1) {
    value = isNaN(value)? 0 : value;
    value --;
    input.value = value;
  }
}
// --------------------------------------