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





// INTENTO - FUNCION PARA INSTANCIAR AUTOMATICAMENTE LOS OBJETOS DE PRODUCTDATA.JS ------------------------------------


// Intento de definir una variable tomando el "id" de cada instancia del objeto para llamarlo con ese nombre. Esto es por que en el caso anterior en el que instancio al objeto Product.js y lo imprimo en la consola con su metodo, no puedo volver a llamar a cada una de las instancias por su nombre

// function productInstancer (data, dataId) {
//   function nameSetter (identificator) {
//     return JSON.stringify(identificator)
//   }

//   let name = nameSetter(dataId);
//   let [name] = new Product(data);
//   return name;
// }

// console.log(productInstancer(productData, productData.id));


// CONCLUSION: NO PUEDO HACER VARIAR EL NOMBRE DE LA VARIABLE SEGUN EL CONTADOR


// FIN DE INTENTO ------------------------------------





// INTENTO - LOOP PARA DEFINIR LAS INSTANCIAS Y LOS NOMBRES AUTOMATICAMENTE --------------------------------------


// // Defino la variable que indica la longitud del JSON "productData" para pasarla como detonante en el parametro del "for"
// let size = productData.length;
// for (let i = 0; i < size; i++){
//   let example = new Product(productData[i]);
//   console.log(example);
// }


// FIN DE INTENTO ------------------------------------