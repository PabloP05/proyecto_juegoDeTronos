import { Guerrero } from "../personajes/guerrero.js";
import { Casa } from "./casas.js";

export class Batalla{
    #guerrerosMuertos = [];


    iniciarBatalla(casa1,casa2) {
        if (casa1 instanceof Casa && casa2 instanceof Casa) {
            console.log(`La casa ${casa1.obtenerNombre} ha entrado en guerra con la casa ${casa2.obtenerNombre} `);
            let guerrerosCasa1 = casa1.obtenerMiembros;
            let guerrerosCasa2 = casa2.obtenerMiembros;
            let mayor;
            if (guerrerosCasa1.length > guerrerosCasa2.length) {
                mayor = guerrerosCasa2;
            } else {
                mayor = guerrerosCasa1;
            }

            for (let i = 0; i < mayor.length; i++){
                this.#luchar(guerrerosCasa2[i], guerrerosCasa1[i]);
                this.#luchar(guerrerosCasa1[i], guerrerosCasa2[i]);
            }
        }
    }

    #luchar(guerreo1,guerreo2) { //asi se declara un metodo privado 
        if (guerreo1.obtenerVida > 0) {
            guerreo1.atacar(guerreo2);
        }

         if (guerreo1.obtenerVida > 0) {
            guerreo2.atacar(guerreo2);
        }

        if (guerreo1.obtenerVida <= 0) {
            guerreo1.morir();
            this.#guerrerosMuertos.push(guerreo1);
        }
        if (guerreo2.obtenerVida <= 0) {
            guerreo2.morir();
            this.#guerrerosMuertos.push(guerreo2);
        }
    }


    mostrarGuerrerosMuertosEnBatalla() {
        console.log(this.#guerrerosMuertos);
    }
}