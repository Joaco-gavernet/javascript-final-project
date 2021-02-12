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

  addNewProduct (demand, quantity = 1) {
    this.selection.push(demand.id);
    let midTotal = demand.price * quantity;
    this.total += midTotal;
    demand.changeStock(-quantity);
    this.refresh()
    
    console.log(`Selection: ${this.selection}`);
    console.log(`Total: ${this.total}`);
  }

  refresh () {
    let contenedorSelectedProducts = document.querySelector('.selectedProducts');
    contenedorSelectedProducts.innerHTML = "";
    if (this.selection.length > 0) {
      this.selection.forEach( productId => {
        contenedorSelectedProducts.innerHTML += selectedProductBuilder(window['product' + productId]);
      })
      document.querySelectorAll('.selectedProductDelete').forEach( button => {
        button.onclick = (event) => {deleteProduct(event)};
      })
    }
    this.refreshTotal();
  }

  refreshTotal () {
    if (this.total == 0) {
      document.querySelector('.selectedProductsTotalPrice').innerHTML= `Carrito vacio`
    } else {
      document.querySelector('.selectedProductsTotalPrice').innerHTML= `$${this.total}`
    }
  }
}