let cardProducts = document.getElementById("contenedor-productos");
let carrito = [];

const getProducts = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();

  // CREAR TARJETAS DE PRODUCTOS
  for (const producto of data) {
    let { nombreProducto, precio, imagen, clase, id } = producto

    let cardHtml =
        `<div class="producto" id=${id} class=${clase}>
            <figure>
                <img src=${imagen} alt="producto">
            </figure>
            <div class="info-producto">
                <h2>${nombreProducto}</h2>
                <p class="precio">$${precio}</p>
                <button type="button" class="btn btn-carrito btn-outline-dark">Añadir al carrito</button>
            </div>
        </div>`
    ;
    cardProducts.innerHTML += cardHtml;
}

  // // AGREGAR PRODUCTOS AL CARRITO
  function agregarAlCarrito(id) {
    const producto = data.find((p) => p.id === id);
    if (producto) {
      carrito.push(producto);
      console.log(`${producto.nombreProducto} agregado al carrito.`);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }
  
  function mostrarCarrito() {
    console.log("Carrito de Compras:");
    carrito.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto.nombreProducto} - $${producto.precio}`);
    });
  }
  
  // CALCULAR TOTAL DE LA COMPRA
  function calcularTotal() {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.precio;
    });
    return total;
  }
  
  function mostrarTotal() {
    const total = calcularTotal();
    console.log(`Total de la compra: $${total}`);
  }
  
  // BOTON AGREGAR CARRITO
  const btnCarrito = document.getElementsByClassName("btn-carrito");
  for (let i = 0; i < btnCarrito.length; i++) {
    btnCarrito[i].addEventListener('click', function() {
      const idProducto = parseInt(btnCarrito[i].parentNode.parentNode.id);
      agregarAlCarrito(idProducto);
    });
  }
}

getProducts();



  
  