class Product {
  constructor(productData) {
    this.productTitle = productData.title;
    this.productPrice = productData.price;
    this.productAuthor = productData.author;
    this.productEditorial = productData.editorial;
    this.productId = productData.id;
    this.productStock = productData.stock;
  }

  getProductData() {
    console.log(`ID: ${this.productId}
    Titulo: ${this.productTitle}
    Precio: ${this.productPrice}
    Autor: ${this.productAuthor}
    Editorial: ${this.productEditorial}
    Cantidad: ${this.productStock}
    `);
  }

  getProductPrice() {
    console.log(`
    El precio del producto es: ${this.productPrice}.`)
  }
}