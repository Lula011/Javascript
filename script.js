class Corredor {
    constructor(id, nombre, apodo, nacionalidad, equipos) {
        this.id = id
        this.nombre = nombre
        this.apodo = apodo
        this.nacionalidad = nacionalidad
        this.equipos =equipos
    }
}

const corredor1 = new Corredor(1, "Juan Manuel Fangio", "El Chueco", "Argentina", [	"Alfa Romeo", "Maserati", "Mercedes", "Ferrari"])
const corredor2 = new Corredor(2, "Graham Hill", "mister monaco", "britanica", ["Lotus","BRM", "Brabham", "Hill"])
const corredor3 = new Corredor(3, "Raymond Mays", "mister monaco", "britanica", ["Era","Privé","BRM"])
const corredor4 = new Corredor(4, "Francisco Sacco Landi", "Chico Landi", "Brasileña", ["Ferrari", "Bandeirantes", "Milano", "Maserati"]) 
const corredor5 = new Corredor(5, "Joseph Gilles Henri Villeneuve ", "Gilles Villeneuve", "Canadiense", ["McLaren", "Ferrari"])


const corredores = [corredor1, corredor2,corredor3,corredor4,corredor5]


console.log(corredores)


corredores.splice(2,1)


console.log(corredores)
