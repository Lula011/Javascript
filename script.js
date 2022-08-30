
const fecha = document.querySelector('#fecha')


// creacion de fecha
const FECHA = new Date()
fecha.innerHTML = `${FECHA.toLocaleDateString('es-MX', { weekday: 'long', month: 'long', day: 'numeric' })}.`


class Lista {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio

    }
}

let listas = []

if (localStorage.getItem("listas")) {
    listas = JSON.parse(localStorage.getItem("listas"))
} else {
    localStorage.setItem("listas", JSON.stringify(listas))
}

const formListas = document.getElementById("formListas")
const divListas = document.getElementById("divListas")
const botonCargado = document.getElementById("botonCargado")


formListas.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e.target)

    let datForm = new FormData(e.target)

    console.log(datForm.get("nombre"), datForm.get("precio"))

    let lista = new Lista(datForm.get("nombre"), datForm.get("precio"))
    listas.push(lista)

    localStorage.setItem(`listas`, JSON.stringify(listas))
    formListas.reset()
})


//carga de productos 
botonCargado.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('listas'))

    divListas.innerHTML = ""

    arrayStorage.forEach((lista, indice) => {

        divListas.innerHTML += `
       
        
         <div class="list-group" id="lista${indice}">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${lista.nombre}<span class="badge bg-dark rounded w-10 p-2"> $${lista.precio}</span>
                 <div class="list-group"><button class="btn btn-danger">Eliminar Producto</button></div>
            </li>
        </div>`

    });


    arrayStorage.forEach((lista, indice) => {
        let botonList = document.getElementById(`lista${indice}`).lastElementChild.lastElementChild

        botonList.addEventListener(`click`, () => {
            document.getElementById(`lista${indice}`).remove()

            listas.splice(indice, 1)

            localStorage.setItem(`listas`, JSON.stringify(listas))

        })

        //Alerta de producto "Eliminado"
        botonList.addEventListener(`click`, () => {
            Swal.fire({
                icon: 'warning',
                title: 'Borrado',
                text: 'Se elimino el producto!',


            })

        })

    })
})
