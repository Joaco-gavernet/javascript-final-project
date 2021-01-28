class Cart {
  constructor() {
    this.selection = [];
    this.total = 0;
    // this.client = ;
  }

  getCart() {
    console.log(this.selection);
    return this.selection;
  }

  getTotal() {
    console.log(this.total);
    return this.total;
  }

  addNewProduct(demand, quantity) {
    this.selection.push(demand);
    let midTotal = demand.productPrice * quantity;
    this.total += midTotal;
    // demand.changeStock(-quantity);
    console.log(this.selection);
    console.log(midTotal);
    console.log(this.total);
  }
}