export class Arma{
    #nombre;
    #daño;
    #tipo;

    constructor(daño = 0,tipo= '',nombre= '') {
        this.#daño = daño;
        this.#tipo = tipo;
        this.#nombre = nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }
    set daño(daño) {
        this.#daño = daño;
    }
    set tipo(tipo) {
        this.#tipo = tipo;
    }

    get obtenerNombre() {
        return this.#nombre;
    }
    get obtenerDaño() {
        return this.#daño;
    }
    get obtenerTipo() {
        return this.#tipo;
    } 

    descripcion() {
        console.log(`${this.#nombre} tiene un daño de ${this.#daño} y es del tipo ${this.#tipo}`);
    }
}