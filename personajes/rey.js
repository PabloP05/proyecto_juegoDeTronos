import { Personaje } from "../Class/personaje.js";

export class Rey extends Personaje { 
    #rey;
    #aniosDeReinado;
    constructor(nombre = '', edad = '') {
        super(nombre, edad);
        this.#rey = nombre;
        this.#aniosDeReinado = 0;
    }

    get obtenerAnios() {
        return this.#aniosDeReinado;
    }

    incrementarReinado() {
        this.#aniosDeReinado++;
    }
    luchar() {
        console.log(`soy el rey ${this.obtenerNombre} de la casa ${this.obtenerCasa.obtenerNombre} y lucharé por mi reino`)
    }
    gobernar() {
        console.log(`${this.obtenerNombre} gobierna con sabiduria desde hace ${this.#aniosDeReinado} años`);
    }
    
}