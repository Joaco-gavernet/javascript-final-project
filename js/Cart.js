class Cart {
  constructor() {
    // Variable en la que ingresan los productos agregados al carrito
    this.selection = [];
    this.total = 0;
    // this.client = ;
  }

  getCart() {
    console.log(this.selection);
  }

  getTotal() {
    console.log(this.total);
  }

  addNewProduct(demand, quantity) {
    this.selection.push(demand);
    let midTotal = demand.productPrice * quantity;
    this.total += midTotal;
    demand.changeStock(-quantity);
  }
}