class Cart {
  constructor() {
    this.carrito = [];
  }

  getCart() {
    console.log(this.carrito);
  }

  addNewProduct(demanda) {
    this.carrito.push(demanda);
  }
}