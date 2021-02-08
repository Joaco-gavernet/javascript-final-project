class Product {
  constructor(productData) {
    this.title = productData.title;
    this.price = productData.price;
    this.author = productData.author;
    this.editorial = productData.editorial;
    this.description = productData.description;
    this.img = productData.img;
    this.id = productData.id;
    this.stock = productData.stock;
    this.isActive = productData.isActive;
  }

  getProductData() {
    console.log(`ID: ${this.id}
    Titulo: ${this.title}
    Precio: ${this.price}
    Autor: ${this.author}
    Editorial: ${this.editorial}
    Cantidad: ${this.stock}
    `);
  }

  // Metodo para imprimir en la consola referencias de los productos mas resumidas y no tan extensas como "getProductData"
  getProductReferences() {
    console.log(this.id, this.title);
  }

  getProductPrice() {
    console.log(`
    El precio del producto es: ${this.price}.`)
  }

  getProductStock() {
    console.log(`
    Cantidad en stock del producto: ${this.stock}.`)
  }

  changeStock(input) {
    this.stock += input;
  }
}