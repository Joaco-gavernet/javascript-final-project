class Client {
  constructor(clientData){
    this.name = clientData.name;
    this.surname = clientData.surname;
    this.phone = clientData.phone;
    this.instagram = clientData.instagram;
  }

  // METODOS
  // GETTERS
  // clientName equivale viene de la instancia creada en el archivo main.js del objeto molde Client.js. En este caso solo sirve como distintivo del resto de los paquetes de datos
  getClientData(clientName) {
    console.log(`Usuario: ${clientName}
    Nombre completo: ${this.name} ${this.surname}
    Telefono: ${this.phone}
    Instagram: ${this.instagram}
    `)
  }

  getFullName() {
    return (`${this.name} ${this.surname}`);
  }

  getContact() {
    // Chequeo que haya la informacion solicitada y en el caso de que sea "true" la cargo en la consola
    if(this.phone){
      console.log(this.phone);
    }
    if(this.instagram) {
      console.log(this.instagram);
    }
  }
}