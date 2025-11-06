import { Personaje } from '../Class/personaje.js'
import { Arma } from "../Class/arma.js";
//en esta clase los personajes que sean guerreros podran equipar armas 

export class Guerrero extends Personaje { 
    #arma;
    #vida;
    #estado = true;
    constructor(nombre = '',edad='') {
        super(nombre, edad);
         this.#vida = 100;
    }

    set vida(vida) {
        this.#vida = vida;
    }

    get obtenerVida() {
        return this.#vida;
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

    recibirDaño(puntos){
    this.#vida -= puntos;
    if (this.#vida <= 0) {
        this.#vida = 0;
        this.morir();
    }
    }

    atacar(objetivo) {
        const daño = Math.floor(this.#arma.daño * (0.7 + Math.random() * 0.6)); // entre 70% y 130% del daño base
        console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${daño} puntos de daño.`);
        objetivo.recibirDaño(daño);
    }

    morir() {
        this.#estado = false;
    }

}