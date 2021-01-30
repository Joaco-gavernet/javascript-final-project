class LocalStorage {
  // Metodo para subir al Local Storage
  pushLocalStorage (key, value) {
    document.localStorage.setItem(JSON.stringify(key, value));
  }

  // Metodo para recibir el Local Storage
  getLocalStorage (key) {
    document.localStorage.getItem(JSON.parse(key));
  }

  // Metodo para vaciar el Local Storage
  removeLocalStorage(key) {
    document.localStorage.removeItem(key);
  }
}