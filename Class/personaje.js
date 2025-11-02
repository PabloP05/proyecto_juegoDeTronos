import { Casa } from "./casas.js";
import { Arma } from "./arma.js";


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
        this.#vida = 100;
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

//aqui equipamos el arma al  personaje
    equiparArma(arma) {
        if (arma instanceof Arma) {
            this.#arma=arma;
            console.log(`${this.#nombre} ha equipado el arama ${this.#arma.obtenerNombre}`);
        }
        
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