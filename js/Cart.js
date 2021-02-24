class Cart {
  constructor (resp, selection) {
    this.request = resp;
    this.selection = [];
    this.total = 0;
    if (document.querySelector('.selectedProducts')) {
      this.refresh()
    }
  }

  getFromLocal (key) {
    return localStorage[`${key}`] ? JSON.parse(localStorage.getItem(`${key}`)) : [];
  }

  setToLocal (name, value) {
    return localStorage[`${name}`] = JSON.stringify(value);
  }

  requestSearch (searchingId, property = undefined) {
    this.request.forEach( product => {
      if (product.id == searchingId) {
        return product;
        // if (property) {
        //   return product.property;
        // }
        // return product;
      }
    })
  }

  addNewProduct (demand) { // intento de agregar mas informacion al Local Storage
    let localSelection = this.getFromLocal('cartSelection');

    if (!JSON.stringify(localSelection).includes(demand.id)) { // paso a string la seleccion para corroborar si el producto ya fue agregado
      let arrayDemand = {id: demand.id, price: JSON.parse(demand.price), quantity: demand.quantity = 1} // construyo el array
      localSelection.push(arrayDemand); // push
      this.setToLocal('cartSelection', localSelection) // cargo al Local Storage
    } else { // si ya esta en el carrito
      let item = localSelection.find( element => element.id == demand.id) // lo busco por su id
      item.quantity ++; // lo incremento
      this.setToLocal('cartSelection', localSelection); // cargo al Local Storage
    }
  }

  deleteProduct (deleteId) {
    let localSelection = this.getFromLocal('cartSelection');

    if (JSON.stringify(localSelection).includes(deleteId)) {
      let item = localSelection.find( element => element.id == deleteId) // lo busco por su id
      let index = localSelection.indexOf(item);
      localSelection.splice(index, 1)
      this.setToLocal('cartSelection', localSelection)
    }
  }

  buildItems () {
    let localSelection = this.getFromLocal('cartSelection');
    let contenedorSelectedProducts = document.querySelector('.selectedProducts');
    contenedorSelectedProducts.innerHTML = "";
  
    localSelection.forEach( searching => {
      this.request.forEach( product => {
        if (product.id == searching.id) {
          contenedorSelectedProducts.innerHTML += selectedProductBuilder(product);
        }
      })
    })
  }

  cleanLocal () { // metodo para limpiar los productos en el Local con menos de 1 unidad
    let localSelection = this.getFromLocal('cartSelection');
    localSelection.forEach( searching => {
      if (searching.quantity < 1 || searching.quantity == 'null') {
        let index = localSelection.indexOf(searching);
        localSelection.splice(index, 1);
        this.setToLocal('cartSelection', localSelection);
        this.refresh()
      }
    })
    debugger;
    this.buildItems()
  }

  refresh () {
    let localSelection = this.getFromLocal('cartSelection');
    
    this.cleanLocal();

    let selectedProductDelete = document.querySelectorAll('.selectedProductDelete');
    selectedProductDelete.forEach( button => {
      button.addEventListener('click', (event) => {
        let id = event.target.dataset.id;
        this.deleteProduct(id)
        this.refresh()
      })
    })


    let selectedProducts = document.querySelectorAll('.orderDiv'); 
    selectedProducts.forEach( product => {
      let counterInput = product.querySelector('.counterInput');
      counterInput.addEventListener('change', () => {
        let item = localSelection.find( element => element.id == product.dataset.id);
        item.quantity = parseInt(counterInput.value);
        this.setToLocal('cartSelection', localSelection)
        this.refresh();
      })
    })

    // ///////////////////////////////////////////////////////////////////////////
    // /////////////////////WORKING IN HERE///////////////////////////////////////
    // ///////////////////////////////////////////////////////////////////////////

    // let selectedProducts = document.querySelectorAll('.orderDiv');
    // selectedProducts.forEach( product => {
    //   let counterInput = product.querySelector('.counterInput');
    //   counterInput.addEventListener('change', () => {
    //     let item = localSelection.find( element => element.id == product.dataset.id);
    //     item.quantity = parseInt(counterInput.value);
    //     this.setToLocal('cartSelection', localSelection)
    //     this.refresh();
    //   })
    // })

    // function corroborateQuantity () {
    //   let counterInputGroup = document.querySelectorAll('.counterInput');
    //   let localSelection = this.getFromLocal('cartSelection');
    //   let item = localSelection.find( element => element.id == product.dataset.id);
    //   item.quantity = parseInt(counterInput.value);
    //   this.setToLocal('cartSelection', localSelection)
    //   this.refresh();
    // }

    // let counterInputGroup = document.querySelectorAll('.counterInput')
    // for (let i in counterInputGroup) {
    //   counterInputGroup[i].addEventListener('change', corroborateQuantity);
    // }

    // ///////////////////////////////////////////////////////////////////////////
    // /////////////////////UNTIL THIS PART///////////////////////////////////////
    // ///////////////////////////////////////////////////////////////////////////


    if (!localSelection.length > 0) {
      document.querySelector('.selectedProducts__options').style.display = 'none';
    } else {
      document.querySelector('.selectedProducts__options').style.display = 'flex';
      document.querySelector('.selectedProducts__clearButton').addEventListener('click', (event) => {
        event.preventDefault()
        localStorage.clear()
        this.refresh()
      })
      document.querySelector('.selectedProducts__confirmButton').addEventListener('click', (event) => {
        event.preventDefault()
        localStorage.clear()
        this.refresh()
      })
    }

    console.log(localSelection);
    this.refreshQuantity()
    this.refreshSubTotal();
    this.refreshTotal();
  }

  modifyQuantity (modifier) {
    let selection = this.getFromLocal('cartSelection')
    console.log(selection + modifier);
  }

  refreshQuantity () {
    let localSelection = this.getFromLocal('cartSelection')
    let orderDivs = document.querySelectorAll('.orderDiv')

    for (let i = 0; i < orderDivs.length; i++) {
      let orderDivParent = orderDivs[i];
      let productFound = localSelection.find( product => product.id == orderDivParent.dataset.id);
      orderDivParent.querySelector('.counterInput').value = productFound.quantity;
    }
  }

  refreshSubTotal () {
    let localSelection = this.getFromLocal('cartSelection')
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