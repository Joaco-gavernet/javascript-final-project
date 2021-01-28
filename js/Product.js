class Product {
  constructor(productData) {
    this.productTitle = productData.title;
    this.productPrice = productData.price;
    this.productAuthor = productData.author;
    this.productEditorial = productData.editorial;
    this.productDescription = productData.description;
    this.productImg = productData.img;
    this.productId = productData.id;
    this.productStock = productData.stock;
    this.productIsActive = productData.isActive;
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

  // Metodo para imprimir en la consola referencias de los productos mas resumidas y no tan extensas como "getProductData"
  getProductReferences() {
    console.log(this.productId, this.productTitle);
  }

  getProductPrice() {
    console.log(`
    El precio del producto es: ${this.productPrice}.`)
  }

  getProductStock() {
    console.log(`
    Cantidad en stock del producto: ${this.productStock}.`)
  }

  changeStock(input) {
    this.productStock += input;
  }
}