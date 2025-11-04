import { Personaje } from '../Class/personaje.js'
import { Arma } from "../Class/arma.js";
//en esta clase los personajes que sean guerreros podran equipar armas 

export class Guerrero extends Personaje { 
    #arma;
    
    constructor(nombre = '',edad='') {
        super(nombre,edad);
    }

    //aqui equipamos el arma al  personaje
    equiparArma(arma) {
        if (arma instanceof Arma) {
            this.#arma=arma;
            console.log(`${this.obtenerNombre} ha equipado el arama ${this.#arma.obtenerNombre}`);
        }
    }

    luchar() {
        console.log(`${this.obtenerNombre} ataca con su ${this.#arma.obtenerNombre} y causa ${this.#arma.obtenerDaño} puntos de daño`);
    }
    entrenar() {
        console.log(`${this.obtenerNombre} se entrena sin descanso para la proxima batalla`);
    }
}