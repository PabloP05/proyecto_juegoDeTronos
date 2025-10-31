import { Casa } from "./casas.js";
import { Arma } from "./arma.js"


export class Personaje {
    #nombre;
    #edad;
    #estado = true;
    #casa;
    #vida;
    #arma;

    constructor(nombre = '', edad = '') {
        this.#edad = edad;
        this.#nombre = nombre;
        this.#casa = '';
        this.#estado = true;
        this.#vida = 10;
    }


    set vida(vida) {
        this.#vida = vida;
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
    get obtenerVida() {
        return this.#vida
    }


    equiparArma(arma) {
        if (arma instanceof Arma) {
            this.#arma=arma;
        }
    }

    saludar() {
        console.log(`Soy ${this.#nombre} de la casa ${this.#casa}`);
    }

    agregarCasa(casa) {
        if (casa instanceof Casa) {
            this.#casa = casa;
        }
    }
}