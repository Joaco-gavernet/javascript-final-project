// FUNCION PARA DEFINIR PRODUCTOS ------------------------------------

function productDataConstructor (titleInput, priceInput, authorInput, editorialInput, descriptionInput, imgInput, idInput, stockInput, activityInput) {
  let item = {
    title: titleInput,
    price: priceInput,
    author: authorInput,
    editorial: editorialInput,
    description: descriptionInput,
    img: imgInput,
    id: idInput,
    stock: stockInput,
    isActive: activityInput
  };
  
  return (item);
}

// FIN DE FUNCION PARA DEFINIR PRODUCTOS ------------------------------------


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
        <input type="button" value="Agregar" class="productButton" data-id="${product.id}">
      </div>
  </li>
  `;
}

// FIN FUNCION - DOM BUILDER DE LOS PRODUCTOS EN PRODUCTDATA.JS ------------------------------------






// Asigna el producto al 'Cart.js' buscandolo por su 'id', presente en la llamada del boton
function selectItem (event) {
  let selectedProduct = window['product' + event.target.dataset.id]
  carrito.addNewProduct(selectedProduct)
}
// FIN ------------------------------------





// Asigna el producto al 'Cart.js' buscandolo por su 'id', presente en la llamada del boton
function deleteProduct (event) {
  let id = event.target.dataset.id
  let indexId = carrito.selection.findIndex( productId => productId == id )
  carrito.selection.splice(indexId,1)
  let productPrice = window['product' + id].price;
  carrito.total -= productPrice;
  carrito.getTotal()
  carrito.refresh()
}
// FIN ------------------------------------






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
      <img src="img/delete.png" alt="Eliminar producto" class="selectedProductDelete" data-id="${product.id}">
    </div>
  </li>
  `;
}
// --------------------------------------



// FUNCION - para la barra de busquedas
function searchFor (json) {
  let barValue = document.querySelector('.searchBar').value.toLowerCase() // tomo el valor ingresado y lo paso a minuscula para compararlo con los tags
  if (barValue) { // si existe un valor en barValue
    json.forEach((product) => { // recorro el json que devuelve la request de Ajax
      for (let i in product.tags) { // itero entre los tags de cada elemento de los productos
        if (!product.tags[i].includes(barValue)) { // corroboro sino incluye el valor ingresado
          $(`.productosCatalogo__ulLi[data-id="${product.id}"]`).hide(); // oculto el elemento
        } else {
          $(`.productosCatalogo__ulLi[data-id="${product.id}"]`).show(); // si lo incluye, lo muestro
        }
      }
    })
  } else if (!barValue) {
    $(`.productosCatalogo__ulLi`).show(); // si no hay barValue ingresado, muestro todos 
  }
}
// --------------------------------------

