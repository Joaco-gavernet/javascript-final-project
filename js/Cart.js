class Cart {
  constructor () {
    this.selection = [];
    this.total = 0;
    this.refresh()
  }

  getCart () {
    console.log(this.selection);
    // return this.selection;
  }

  getTotal () {
    console.log(this.total);
    // return this.total;
  }

  addNewProduct (demand, quantity = 1) {
    this.selection.push(demand.id);
    let midTotal = demand.price * quantity;
    this.total += midTotal;
    demand.changeStock(-quantity);
    this.refresh()
    
    console.log(`Selection: ${this.selection}`);
    console.log(`MidTotal: ${midTotal}`);
    console.log(`Total: ${this.total}`);
  }

  refresh () {
    let contenedorSelectedProducts = document.querySelector('.selectedProducts');
    contenedorSelectedProducts.innerHTML = "";
    if (this.selection) {
      this.selection.forEach( productId => {
        contenedorSelectedProducts.innerHTML += selectedProductBuilder(window['product' + productId]);
      })
      document.querySelector('.selectedProductsTotalPrice').innerHTML = `$${this.total}`
    }
  }
}