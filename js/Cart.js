class Cart {
  constructor () {
    this.selection = [];
    this.total = 0;
    if (document.querySelector('.selectedProducts')) {
      this.refresh()
    }
  }

  addNewProduct (demand) {
    if (!this.selection.includes(demand.id)) {
      this.selection.push(demand.id);
      this.total += JSON.parse(demand.price);
      // localStorage['cartSelection'] = JSON.stringify(this.selection); // cart
      console.log(`Selection: ${this.selection}`);
      console.log(`Total: ${this.total}`);
      // this.refresh()
    }
  }

  refresh () {
    // let contenedorSelectedProducts = document.querySelector('.selectedProducts');

    console.log(this.selection);

    // cartSelection.forEach( productId => {
    //   contenedorSelectedProducts.innerHTML += selectedProductBuilder(productId);
    // });

    // contenedorSelectedProducts.innerHTML = "";
    // if ('cartSelection' in localStorage) { // corroboro que este almacenado en LS
    //   let cartSelection = JSON.parse(localStorage.getItem('cartSelection')); // guardo el valor en una variable
    //   console.log(cartSelection);

    //   if (cartSelection.length > 0 && cartSelection[0] !== 'null') {
    //     console.log('Cart exists');

    //     cartSelection.forEach( productId => {
    //       contenedorSelectedProducts.innerHTML += selectedProductBuilder(productId);
    //     });

    //     document.querySelectorAll('.selectedProductDelete').forEach( button => {
    //       button.onclick = (event) => {deleteProduct(event)};
    //     })
    //   } else if (cartSelection.length === 0) {
    //     localStorage.clear();
    //   }

    //   this.refreshTotal();
    // }
  }

  refreshTotal () {
    if (this.total == 0) {
      document.querySelector('.selectedProductsTotalPrice').innerHTML= `Carrito vacio`
    } else {
      document.querySelector('.selectedProductsTotalPrice').innerHTML= `$${this.total}`
    }
  }
}