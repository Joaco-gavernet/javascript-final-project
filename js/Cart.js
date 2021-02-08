class Cart {
  constructor() {
    this.selection = [];
    this.total = 0;
  }

  getCart() {
    console.log(this.selection);
    // return this.selection;
  }

  getTotal() {
    console.log(this.total);
    // return this.total;
  }

  addNewProduct(demand, quantity = 1) {
    this.selection.push(demand.id);
    let midTotal = demand.price * quantity;
    this.total += midTotal;
    demand.changeStock(-quantity);
    console.log(`Selection: ${this.selection}`);
    console.log(`MidTotal: ${midTotal}`);
    console.log(`Total: ${this.total}`);
  }
}