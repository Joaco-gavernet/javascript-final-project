class Cart {
  constructor() {
    this.selection = [];
    this.total = 0;
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
    this.selection.push(demand.productId);
    let midTotal = demand.productPrice * quantity;
    this.total += midTotal;
    demand.changeStock(-quantity);
    console.log(`Selection: 
    ${this.selection}`);
    console.log(`MidTotal: 
    ${midTotal}`);
    console.log(`Total: 
    ${this.total}`);
  }
}