import {Personaje} from './personaje.js'

export class Casa{
    #nombre;
    #lema;
    #miembros = [];

    constructor(nombre = '',lema = '') {
        this.#nombre = nombre;
        this.#lema = lema;
    }


    set lema(lema) {
        this.#lema = lema;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get obtenerLema() {
        return this.#lema;
    }
    get obtenerNombre(){
        return this.#nombre;
    }

    agregarMiembro(personaje) {
        if ( personaje instanceof Personaje) {
            this.#miembros.push(personaje);
        } else {
            console.log('no se ha introducido un personaje');
        }
    }

    listarMiembros() {
        console.log('Personajes de la casa ' + this.#nombre);
        for (const element of this.#miembros) {
            console.log(element);
        }
    }
}