class LocalStorage {
  // Metodo para subir al Local Storage
  pushLocalStorage (key, value) {
    localStorage.setItem(JSON.stringify(key, value));
  }

  // Metodo para recibir el Local Storage
  getLocalStorage (key) {
    localStorage.getItem(JSON.parse(key));
  }

  // Metodo para vaciar el Local Storage
  removeLocalStorage(key) {
    localStorage.removeItem(key);
  }
}