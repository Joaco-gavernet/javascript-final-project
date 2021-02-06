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
  <li class="productosCatalogo__ulLi">
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





//  --------------------------------------

// Asigna el producto al 'Cart.js' buscandolo por su 'id', presente en la llamada del boton
function selectItem (event) {
  let productId = event.target.dataset.id;
  let selectedProduct = arrayProductsObject.find(
    arrayProductsObjectItem => arrayProductsObjectItem.productId == productId
  )

  // carrito.addNewProduct(selectedProduct, amount)
  carrito.addNewProduct(selectedProduct, 1)
}

// FIN ------------------------------------

// CONTAR CANTIDAD DE CLICKS EN PRODUCTOS ------------------------------------

function selectItemQuantity() {
  amount += 1;
}

// FIN --------------------------------------


