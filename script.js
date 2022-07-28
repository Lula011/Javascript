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
    console.log(listas)
    localStorage.setItem(`listas`, JSON.stringify(listas))
    formListas.reset()
})

botonCargado.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('listas'))
    
    divListas.innerHTML = ""
    
    arrayStorage.forEach((lista, indice) => {
       
        divListas.innerHTML += `
        <div class="card border-dark mb-3" id="lista${indice}" style="max-width: 20rem; margin:4px;">
        <div class="card-header"><h2>${lista.nombre}</h2></div>
        <div class="card-body"><p class="card-title">${lista.precio}</p>
        <button class="btn btn-danger">Eliminar Producto</button></div></div>`

        
    });

        arrayStorage.forEach((lista, indice) => {
            let botonCard = document.getElementById(`lista${indice}`).lastElementChild.lastElementChild
           
            botonCard.addEventListener(`click`, () => {
                document.getElementById(`lista${indice}`).remove()

                listas.splice(indice,1)

                localStorage.setItem(`listas`, JSON.stringify(listas))
                console.log(`${lista.nombre} Eliminada`)

            
        })
    })
})

