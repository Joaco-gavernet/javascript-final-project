class Cart {
  constructor () {
    this.selection = [];
    this.total = 0;
    if (document.querySelector('.selectedProducts')){
      this.refresh()
    }
  }

  getCart () {
    console.log(this.selection);
    // return this.selection;
  }

  getTotal () {
    console.log(`Total: ${this.total}`);
    // return this.total;
  }

  addNewProduct (demand/*, quantity = 1*/) {
    if (!this.selection.includes(demand.id)) {
      this.selection.push(demand.id);
      localStorage['cartSelection'] = JSON.stringify(this.selection); // cart
    }
    this.total += JSON.parse(demand.price);
    this.refresh()
    
    console.log(`Selection: ${this.selection}`);
    console.log(`Total: ${this.total}`);
  }

  refresh () {
    let contenedorSelectedProducts = document.querySelector('.selectedProducts');
    contenedorSelectedProducts.innerHTML = "";
    if ('cartSelection' in localStorage) { // corroboro que este almacenado en LS
      let cartSelection = JSON.parse(localStorage.getItem('cartSelection')); // guardo el valor en una variable

      if (cartSelection.length > 0) {
        console.log('Cart exists');
        // this.selection.forEach( productId => {
        //   contenedorSelectedProducts.innerHTML += selectedProductBuilder(window['product' + productId]);
        // })

        // cartSelection.forEach( id => {
        //   let ejemplo = {
        //     "title": "El principito",
        //     "price": "1000",
        //     "author": "Marcos",
        //     "editorial": "Marea",
        //     "description": "El libro cuenta las enseñanzas de los “2 padres” del autor, el biológico que es un profesor que defiende el sistema de estudia, trabaja, trabaja más y llegarás algo, y el padre de un amigo que le instruye en el arte de poner el dinero a trabajar para ti.",
        //     "img": "img/principito.png",
        //     "id": "AAA000",
        //     "stock": "10",
        //     "tags": ["libro", "marcos", "marea", "el principito"],
        //     "isActive": "true"
        //   }

        //   window['product' + id] = new Product(ejemplo);
        //   contenedorSelectedProducts.innerHTML += selectedProductBuilder(productAAA000);
        // })

        cartSelection.forEach( productId => {
          contenedorSelectedProducts.innerHTML += selectedProductBuilder(window['product' + productId]);
        });

        document.querySelectorAll('.selectedProductDelete').forEach( button => {
          button.onclick = (event) => {deleteProduct(event)};
        })
      } else if (cartSelection.length === 0) {
        localStorage.clear();
      }
      this.refreshTotal();
    }
  }

  refreshTotal () {
    if (this.total == 0) {
      document.querySelector('.selectedProductsTotalPrice').innerHTML= `Carrito vacio`
    } else {
      document.querySelector('.selectedProductsTotalPrice').innerHTML= `$${this.total}`
    }
  }
}