import { Guerrero } from "../personajes/guerrero.js";
import { Casa } from "./casas.js";

export class Batalla{
    #guerrerosMuertos = [];
    #guerrerosCasa1 = [];
    #guerrerosCasa2 = [];

    iniciarBatalla(casa1,casa2) {
        if (casa1 instanceof Casa && casa2 instanceof Casa) {
            console.log(`La casa ${casa1.obtenerNombre} ha entrado en guerra con la casa ${casa2.obtenerNombre} `);
             this.#guerrerosCasa1= casa1.obtenerMiembros;
            this.#guerrerosCasa2 = casa2.obtenerMiembros;

            console.log(`los guerreros de la casa ${casa1.obtenerNombre} son :`);
            for (const element of this.#guerrerosCasa1) {
                console.log(element.obtenerNombre);
            }
            console.log(`los guerreros de la casa ${casa2.obtenerNombre} son :`);
            for (const element of this.#guerrerosCasa2) {
                console.log(element.obtenerNombre);
            }


            let mayor;
            if (this.#guerrerosCasa1.length > this.#guerrerosCasa2.length) {
                mayor = this.#guerrerosCasa2; // cargar los datos de las casas
            } else {
                mayor = this.#guerrerosCasa1;
            }

            for (let i = 0; i < mayor.length; i++){
                console.log(`${this.#guerrerosCasa2[i].obtenerNombre} ha iniciado un enfrentamiento con : ${this.#guerrerosCasa1[i].obtenerNombre}`);
                this.#luchar(this.#guerrerosCasa2[i], this.#guerrerosCasa1[i]);
                console.log(`${this.#guerrerosCasa1[i].obtenerNombre} ha iniciado un enfrentamiento con : ${this.#guerrerosCasa2[i].obtenerNombre}`);
                this.#luchar(this.#guerrerosCasa1[i], this.#guerrerosCasa2[i]);
            }
        }
        this.#mostrarGuerrerosMuertosEnBatalla();
        this.#resultadoDeLaBatalla(this.#guerrerosCasa1,this.#guerrerosCasa2,casa1,casa2);
    }

    #luchar(guerreo1,guerreo2) { //asi se declara un metodo privado 
        if (guerreo1.obtenerVida > 0) {
            guerreo1.atacar(guerreo2);
        }

         if (guerreo1.obtenerVida > 0) {
            guerreo2.atacar(guerreo1);
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


    #mostrarGuerrerosMuertosEnBatalla() {
        console.log('los gurreros muertos son :');
        let muertos = new Set(this.#guerrerosMuertos);
        for (const element of muertos) {
            console.log(`- ${element.obtenerNombre}`);
        }
    }

    #resultadoDeLaBatalla(guerreos1,guerreros2,casa1,casa2){
        let vivosCasa1 = guerreos1.filter(n =>n.obtenerVida>0);
         let vivosCasa2 = guerreros2.filter(n =>n.obtenerVida>0);

        let ganador = (vivosCasa2.length>vivosCasa1.length) ? casa2.obtenerNombre:casa1.obtenerNombre;

        console.log(`La casa ganadora es : ${ganador}`);

    }
}