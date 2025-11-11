import { Guerrero } from "../personajes/guerrero.js";
import { Casa } from "./casas.js";

export class Batalla{
    #guerrerosMuertos = [];
    #guerrerosCasa1 = [];
    #guerrerosCasa2 = [];

iniciarBatalla(casa1,casa2) {
        // se comrpueba que las casas sean casas y no strings que se le pasen al archivo
        if (casa1 instanceof Casa && casa2 instanceof Casa) {
            console.log(`La casa ${casa1.obtenerNombre} ha entrado en guerra con la casa ${casa2.obtenerNombre} `);

             // valido que solo los guerreros puedan entrar a la guerra 
             for (const element of casa1.obtenerMiembros) {
                if(element instanceof Guerrero )
                    this.#guerrerosCasa1.push(element);
             }

             for (const element of casa2.obtenerMiembros) {
                if(element instanceof Guerrero )
                    this.#guerrerosCasa2.push(element);
             }

            console.log(`los guerreros y hechiceros de la casa ${casa1.obtenerNombre} son :`);
            for (const element of this.#guerrerosCasa1) {
                console.log(element.obtenerNombre);
            }
            console.log(`los guerreros y hechiceros de la casa ${casa2.obtenerNombre} son :`);
            for (const element of this.#guerrerosCasa2) {
                console.log(element.obtenerNombre);
            }


           while(this.#guerrerosCasa1.length>0 && this.#guerrerosCasa2.length>0){
                this.#luchar(this.#guerrerosCasa1[Math.floor(Math.random() * this.#guerrerosCasa1.length)],this.#guerrerosCasa2[Math.floor(Math.random() * this.#guerrerosCasa2.length)]);
            }
        }
        this.#mostrarGuerrerosMuertosEnBatalla();
        this.#resultadoDeLaBatalla(this.#guerrerosCasa1,this.#guerrerosCasa2,casa1,casa2);
    }

    #luchar(guerreo1,guerreo2) { //asi se declara un metodo privado 
        
        //equilibrador de batalla, hace que el guerreo pueda hacer distintos ataques 
        const primero = Math.random() < 0.5 ? guerreo1 : guerreo2;
        const segundo = (primero === guerreo1) ? guerreo2 : guerreo1;


        if (primero.obtenerVida > 0) {
            primero.atacar(segundo);
        }

         if (segundo.obtenerVida > 0) {
            segundo.atacar(primero);
        }

        if(primero.obtenerVida<=0 && !this.#guerrerosMuertos.includes(primero)){
            primero.morir();
            this.#guerrerosMuertos.push(primero);

            let i1 =this.#guerrerosCasa1.findIndex(n=>n.obtenerNombre==primero.obtenerNombre);
            if(i1!==-1) this.#guerrerosCasa1.splice(i1,1);
            i1 =this.#guerrerosCasa2.findIndex(n=>n.obtenerNombre==primero.obtenerNombre);
            if(i1!==-1) this.#guerrerosCasa2.splice(i1,1);
        }

        if(segundo.obtenerVida<=0 && !this.#guerrerosMuertos.includes(segundo)){
            segundo.morir();
            this.#guerrerosMuertos.push(segundo);

            let i1 =this.#guerrerosCasa1.findIndex(n=>n.obtenerNombre==segundo.obtenerNombre);
            if(i1!==-1) this.#guerrerosCasa1.splice(i1,1);
            i1 =this.#guerrerosCasa2.findIndex(n=>n.obtenerNombre==segundo.obtenerNombre);
            if(i1!==-1) this.#guerrerosCasa2.splice(i1,1);
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