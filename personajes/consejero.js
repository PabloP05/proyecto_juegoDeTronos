import { Personaje } from '../Class/personaje.js'

export class Consejero extends Personaje{
    #especialidad;

    constructor(nombre='',edad='',especialidad='') {
        super(nombre, edad);
        this.#especialidad = especialidad;
    }

    set especialidad(especialidad) {
        this.#especialidad = especialidad;
    }
    get obtenerEspecialidad() {
        return this.#especialidad;
    }

    luchar() {
        console.log(`${this.obtenerNombre} no lucha con armas, si no con palabras e inteligencia`);
    }
    aconsejar(rey) {
        console.log(`el consejero ${this.obtenerNombre} aconseja a ${rey.obtenerNombre}`);
    }
}