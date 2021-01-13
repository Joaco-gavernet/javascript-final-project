class Client {
  constructor(clientData){
    this.name = clientData.name;
    this.surname = clientData.surname;
    this.phone = clientData.phone;
  }

  getFullName() {
    return console.log(`Nombre completo del cliente: ${this.name} ${this.surname}`);
  }

  getContact() {
    return console.log(`Medio para contactar con el cliente ${this.phone}`);
  }
}