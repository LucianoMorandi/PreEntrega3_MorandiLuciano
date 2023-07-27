//ARRAY DE PRODUCTOS

let productos = [
    {
        id: 1,
        nombreProducto: "Pedigree adulto x21kg",
        precio: 4000,
        imagen: "./images/ped-adulto.png",
        clase: "perro",
        cantidad: 0
    },
    {
        id: 2,
        nombreProducto: "Pedigree cachorro x21kg",
        precio: 6000,
        imagen: "./images/ped-cachorro.png",
        clase: "perro",
        cantidad: 0
    },
    {
        id: 3,
        nombreProducto: "Pedigree raza pequeña x15kg",
        precio: 5000,
        imagen: "./images/ped-pequeno.png",
        clase: "perro",
        cantidad: 0
    },
    {
        id: 4,
        nombreProducto: "Pedigree senior x8kg",
        precio: 4000,
        imagen: "./images/ped-senior.png",
        clase: "perro",
        cantidad: 0
    },
    {
        id: 5,
        nombreProducto: "Whiskas pescado x10kg",
        precio: 8000,
        imagen: "./images/whi-pescado.png",
        clase: "gato",
        cantidad: 0
    },
    {
        id: 6,
        nombreProducto: "Whiskas carne x10kg",
        precio: 8000,
        imagen: "./images/whi-carne.png",
        clase: "gato",
        cantidad: 0
    },
    {
        id: 7,
        nombreProducto: "Whiskas pollo x10kg",
        precio: 8000,
        imagen: "./images/whi-pollo.png",
        clase: "gato",
        cantidad: 0
    },
    {
        id: 8,
        nombreProducto: "Whiskas gatitos x10kg",
        precio: 8000,
        imagen: "./images/whi-gatito.png",
        clase: "gato",
        cantidad: 0
    }
]

let cardProducts = document.getElementById("contenedor-productos");
let carrito = [];

for (const producto of productos) {
    let { nombreProducto, precio, imagen, clase } = producto

    let cardHtml =
        `<div class="producto" class=${clase}>
            <figure>
                <img src=${imagen} alt="producto">
            </figure>
            <div class="info-producto">
                <h2>${nombreProducto}</h2>
                <p class="precio">$${precio}</p>
                <button type="button" class="btn">Añadir al carrito</button>
            </div>
        </div>`
    ;
    cardProducts.innerHTML += cardHtml;
}