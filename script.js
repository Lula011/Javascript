



let Cuentaregresiva =10

console.log("comienza la cuenta regresiva para comenzar la clasificación")

while(Cuentaregresiva !=0){
    console.log("Cuenta Regresiva:"+ Cuentaregresiva + "...")
    Cuentaregresiva = Cuentaregresiva -=1
}

console.log("Checkered flags, comienza la carrera!")

class Corredor {
    constructor(id, nombre, apodo, nacionalidad, puntaje, equipos) {
        this.id = id
        this.nombre = nombre
        this.apodo = apodo
        this.nacionalidad = nacionalidad
        this.puntaje = puntaje
        this.equipos =equipos
    }
}

const corredor1 = new Corredor(1, "Juan Manuel Fangio", "El Chueco", "Argentina", 18, [	"Alfa Romeo", "Maserati", "Mercedes", "Ferrari"])

const corredor2 = new Corredor(2, "Graham Hill", "mister monaco", "britanica", 25, ["Lotus","BRM", "Brabham", "Hill"])

const corredor3 = new Corredor(3, "Raymond Mays", "Mays", "britanica", 27, ["Era","Privé","BRM"])

const corredor4 = new Corredor(4, "Francisco Sacco Landi", "Chico Landi", "Brasileña", 20, ["Ferrari", "Bandeirantes", "Milano", "Maserati"]) 

const corredor5 = new Corredor(5, "Joseph Gilles Henri Villeneuve ", "Gilles", "Canadiense", 19,["McLaren", "Ferrari"])


const corredores = [corredor1, corredor2,corredor3,corredor4,corredor5]
console.log(corredores,"El Chueco", "Mister Monaco", "Mays", "Chico Landi","Gilles")

const corredoresFiltrados = corredores.filter( Corredor => Corredor.puntaje <= 20)

corredoresFiltrados.forEach(Corredor => {
    console.log(Corredor)
})

function buscarCorredores (nombre){
    return `Hola ${nombre}, agrega el apodo del corredor que quieras saber si califico`
    }

    console.log(buscarCorredores("Lu"))



let nombreCorredor, apodo;

do{
    nombreCorredor=prompt("ingrese el apodo del corredor").toLowerCase()
}


while(nombreCorredor == "")

let carreraF1

switch (nombreCorredor) {
    case "el chueco": 
     alert (`Califico en 1er puesto`)
     break
    case "mister monaco":
        alert (`no califico` )
    break

    case "mays":
    alert (`no califico`)
    break

    case "chico landi":
        alert (`califico en 3er puesto`)

        case "gilles":
            alert (`califico en 2do puesto`)

            break

    default:
        alert(`su nombre es incorrecto`)


}

function resultadoBusqueda (){
    return `Gracias por tu busqueda.`
    }

    console.log(resultadoBusqueda())

    
    const corredoresOrden = document.getElementsByClassName ("corredoresOrden")[0, 1].childNodes
    
  
    console.log(corredoresOrden)
    
