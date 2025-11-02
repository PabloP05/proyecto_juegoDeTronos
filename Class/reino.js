import { Casa } from "./casas.js";
import { Personaje } from "./personaje.js";


export class Reino{
    #nombre;
    #casas = [];
    #rey;

    constructor(nombre ='') {
        this.#nombre = nombre;
        this.#rey = '';
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    nombrarRey(personaje) {
        if (personaje instanceof Personaje) {
            this.#rey = personaje;
            console.log(`${personaje.obtenerNombre} ha sido proclamado rey de ${this.#nombre}`);
        }
    }

    agregarCasas(casa) {
        if (casa instanceof Casa) {
            this.#casas.push(casa);
        }
        console.log(`la casa ${casa.obtenerNombre} ha sido añadida al reino de ${this.#nombre}`);
    }

    mostrarCasas() {
        console.log(`casas del reino de ${this.#nombre}`);
        for (const element of this.#casas) {
            console.log(`- ${element.obtenerNombre}`);
        }
    }

    informacionDelRey() {

        console.log(`El rey actual es ${this.#rey.obtenerNombre} de la casa ${this.#rey.obtenerCasa.obtenerNombre}`);
    }

}