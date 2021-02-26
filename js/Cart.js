class Cart {
  constructor (resp) {
    this.request = resp;
    this.selection = [];
    this.total = 0;
    if (document.querySelector('.selectedProducts')) {
      this.refresh()
    }
  }

  requestSearch (searchingId, property = undefined) {
    let result;
    this.request.forEach( product => {
      if (product.id == searchingId) {
        result = product;
        if (property) {
          return product.property;
        }
        return product;
      }
    })
    return result;
  }

  addNewProduct (demand) {
    let localSelection = getFromLocal('cartSelection');

    if (!JSON.stringify(localSelection).includes(demand.id)) { // paso a string la seleccion para corroborar si el producto ya fue agregado
      let arrayDemand = {id: demand.id, price: JSON.parse(demand.price), quantity: demand.quantity = 1} // construyo el array
      localSelection.push(arrayDemand); // push
      setToLocal('cartSelection', localSelection) // cargo al Local Storage
    } else { // si ya esta en el carrito
      let item = localSelection.find( element => element.id == demand.id) // lo busco por su id
      item.quantity ++; // lo incremento
      setToLocal('cartSelection', localSelection); // cargo al Local Storage
    }
  }

  deleteProduct (deleteId) {
    let localSelection = getFromLocal('cartSelection');

    if (JSON.stringify(localSelection).includes(deleteId)) {
      let item = localSelection.find( element => element.id == deleteId) // lo busco por su id
      let index = localSelection.indexOf(item);
      localSelection.splice(index, 1)
      setToLocal('cartSelection', localSelection)
    }
  }

  buildItems () {
    let localSelection = getFromLocal('cartSelection');
    let contenedorSelectedProducts = document.querySelector('.selectedProducts');
    contenedorSelectedProducts.innerHTML = "";
  
    localSelection.forEach( searching => {
      let result = this.requestSearch(searching.id);
      contenedorSelectedProducts.innerHTML += selectedProductBuilder(result);
    })
  }

  cleanLocal () { // metodo para limpiar los productos en el Local con menos de 1 unidad
    let localSelection = getFromLocal('cartSelection');
    localSelection.forEach( searching => {
      if (searching.quantity < 1 || searching.quantity == 'null') {
        let index = localSelection.indexOf(searching);
        localSelection.splice(index, 1);
        setToLocal('cartSelection', localSelection);
        // this.refresh()
      }
    })
    this.buildItems()
  }

  confirmPurchase (event) {
    event.preventDefault();
    let localSelection = getFromLocal('cartSelection');
    console.log(localSelection);
    let name = prompt('Ingrese su nombre completo');
    let contact = prompt('Ingrese su numero de telefono o correo electronico');
    let address = prompt('Ingrese su direccion');
    alert('Su pedido estara confirmado cuando le llegue un aviso.');
    console.log(`
    Nombre: ${name}
    Contacto: ${contact}
    Direccion: ${address}
    `);
  }

  refresh () {
    let localSelection = getFromLocal('cartSelection');
    
    this.cleanLocal();

    let selectedProductDelete = document.querySelectorAll('.selectedProductDelete');
    selectedProductDelete.forEach( button => {
      button.addEventListener('click', (event) => {
        let id = event.target.dataset.id;
        this.deleteProduct(id)
        this.refresh()
      })
    })


    if (!localSelection.length > 0) {
      document.querySelector('.selectedProducts__options').style.display = 'none';
    } else {
      document.querySelector('.selectedProducts__options').style.display = 'flex';
      document.querySelector('.selectedProducts__clearButton').addEventListener('click', (event) => {
        event.preventDefault()
        localStorage.clear()
        this.refresh()
      })
      document.querySelector('.selectedProducts__confirmButton').addEventListener('click', (event) => {this.confirmPurchase(event)}, {once:true})
    }

    let counterInputGroup = document.querySelectorAll('.counterInput')
    counterInputGroup.forEach( counterInput => {
      counterInput.addEventListener('change', () => {
        corroborateQuantity(counterInput);
        this.refresh();
      });
    })

    this.refreshQuantity()
    this.refreshSubTotal();
    this.refreshTotal();
  }

  modifyQuantity (modifier) {
    let selection = getFromLocal('cartSelection')
    console.log(selection + modifier);
  }

  refreshQuantity () {
    let localSelection = getFromLocal('cartSelection')
    let orderDivs = document.querySelectorAll('.orderDiv')

    for (let i = 0; i < orderDivs.length; i++) {
      let orderDivParent = orderDivs[i];
      let productFound = localSelection.find( product => product.id == orderDivParent.dataset.id);
      orderDivParent.querySelector('.counterInput').value = productFound.quantity;
    }
  }

  refreshSubTotal () {
    let localSelection = getFromLocal('cartSelection')
    let subtotals = document.querySelectorAll('.subtotalPrice__value');
    for (let i in localSelection) {
      let subtotal = localSelection[i].price * localSelection[i].quantity;
      subtotals[i].innerHTML = subtotal;
    }
  }

  refreshTotal () {
    this.total = 0;
    let carrito = localStorage.cartSelection ? JSON.parse(localStorage.cartSelection) : [];
    carrito.forEach( product => {
      this.total += (product.price * product.quantity);
    })
    
    if (this.total == 0) {
      document.querySelector('.selectedProductsTotalPrice').innerHTML = `Carrito vacio`;
      document.querySelector('.selectedProducts__buyButton').display = 'block';
    } else {
      document.querySelector('.selectedProductsTotalPrice').innerHTML= `$${this.total}`
      document.querySelector('.selectedProducts__buyButton').display = 'none'
    }
  }

}