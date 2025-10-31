import { Casa } from "./casas";
import { Personaje } from "./personaje";


export class Reino{
    #nombre;
    #casas = [];
    #rey;

    constructor(nombre ='', rey='') {
        this.#nombre = nombre;
        this.#rey = rey;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    nombrarRey(personaje) {
        if (personaje instanceof Personaje) {
            this.#rey = personaje;
        }
    }

    agregarCasas(casa) {
        if (casa instanceof Casa) {
            this.#casas.push(casa);
        }
    }

    informacionDelRey() {
        console.log(this.#rey);
    }

}