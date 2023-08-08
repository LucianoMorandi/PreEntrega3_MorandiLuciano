const carritoContenido = document.getElementById("carrito-contenido");
const totalCarrito = document.getElementById("total-carrito");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = 0;

// CREANDO CARRITO A PARTIR DE LOCALSTORAGE
    carrito.forEach(producto => {
        const { nombreProducto, precio } = producto;
        total += precio;
        const itemHtml = `<p>${nombreProducto} - $${precio}</p>`;
        carritoContenido.innerHTML += itemHtml;

        const totalHtml = `El total a pagar es: $${total}`;
        totalCarrito.innerHTML = totalHtml;
    });