// DECLARAR VARIABLES
const grande = document.querySelector('.grande')
const punto  = document.querySelectorAll('.punto')

// Asignar un CLICK a PUNTO y darle posición
punto.forEach((cadaPunto,i) => {
    punto[i].addEventListener('click', () => {
        let posicion = i
// Definir desplazamiento      
        let operacion = posicion * -50
        grande.style.transform = `translateX(${operacion}%)`
// Añadir clase ACTIVO en el punto que hacemos CLICK
        punto.forEach((cadaPunto,i) => {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})