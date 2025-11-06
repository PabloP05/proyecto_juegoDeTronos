import { Casa } from "../Class/casas.js";
import { Arma } from "../Class/arma.js";
import { Reino } from "../Class/reino.js";

import { Guerrero } from '../personajes/guerrero.js';
import { Consejero } from '../personajes/consejero.js';
import { Rey } from "../personajes/rey.js";


let reino1 = new Reino('Poniente');

let casa1 = new Casa('Stark', 'Se acerca el Invierno');
let casa2 = new Casa('Lannister', 'Oye mi rugido');


let arma1 = new Arma(10, 'espada', 'aguja');
let arma2 = new Arma(10, 'espada', 'garra');

let personaje1 = new Guerrero('Jon snow', 20);
let personaje2 = new Guerrero('Aray stark ', 20);
let personaje3 = new Consejero('Tyron Lannister', 20, 'Politica');
let personaje4 = new Rey('Robert baratheon', 20);




/* LLAMADA A LAS FUNCIONES  */

reino1.agregarCasas(casa1);
reino1.agregarCasas(casa2);


personaje1.equiparArma(arma2);
personaje2.equiparArma(arma1);


casa1.agregarMiembro(personaje1);
personaje1.agregarCasa(casa1);
casa1.agregarMiembro(personaje2);
personaje2.agregarCasa(casa1);
casa2.agregarMiembro(personaje3);
personaje3.agregarCasa(casa2);
reino1.nombrarRey(personaje4);
casa2.agregarMiembro(personaje4);
personaje4.agregarCasa(casa2);


/* PRESENTACIONES DE LOS PERSONAJES  */

console.log('---------------------FASE 2---------------')

personaje1.saludar();
personaje1.luchar();
personaje1.entrenar();

personaje3.saludar();
personaje3.luchar();
personaje3.aconsejar(personaje4);

//para que salgan los 15 años
for (let i = 0; i < 15; i++){
    personaje4.incrementarReinado()
}

personaje4.saludar();
personaje4.gobernar();
personaje4.luchar();


