class Persona{
    constructor(pelo, altura, peso, nombre){
        this.pelo = pelo
        this.altura = altura
        this.peso = peso
        this.nombre = nombre
    }
}

const persona1 = new Persona("liso", 1.57, 50, "Pepe")
console.log(persona1);

const persona2 = new Persona("rizado", 4, 12, "pepa")
console.log(persona2);