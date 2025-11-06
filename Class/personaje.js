import { Casa } from "./casas.js";



export class Personaje {
    #nombre;
    #edad;
    
    #casa;


    constructor(nombre = '', edad = '') {
        this.#edad = edad;
        this.#nombre = nombre;
        this.#casa = '';
       
    }





    get obtenerNombre() {
        return this.#nombre;
    }
    get obtenerCasa() {
        return this.#casa;
    }
    get obtenerEdad() {
        return this.#edad
    }
    get obtenerEdad() {
        return this.#edad;
    }




    saludar() {
        console.log(`Soy ${this.#nombre} de la casa ${this.#casa.obtenerNombre}`);
    }

    agregarCasa(casa) {
        if (casa instanceof Casa) {
            this.#casa = casa;
        }
    }
}