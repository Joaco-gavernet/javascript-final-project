class Product {
  constructor(x) {
    this.productName = x.productName;
    this.productPrice = x.productPrice;
    this.productId = x.productId;
  }

  getProduct() {
    console.log(`Titulo: ${this.productName}, precio: ${this.productPrice}, codigo: ${this.productId}`);
  }

  getProductPrice() {
    console.log(`
    El precio del producto es: ${this.productPrice}.`)
  }
}