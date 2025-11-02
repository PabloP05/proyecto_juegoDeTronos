import { Casa } from "./Class/casas.js";
import { Arma } from "./Class/arma.js";
import { Personaje } from "./Class/personaje.js";
import {Reino} from "./Class/reino.js"






let reino1 = new Reino('Poniente');

let casa1 = new Casa('Stark', 'Se acerca el Invierno');
let casa2 = new Casa('Lannister', 'Oye mi rugido');


let arma1 = new Arma(10, 'espada', 'aguja');
let arma2 = new Arma(10, 'espada', 'garra');

let personaje1 = new Personaje('Jon snow', 20);
let personaje2 = new Personaje('Aray stark ', 20);
let personaje3 = new Personaje('Jaime Lannister', 20);






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
reino1.nombrarRey(personaje3);
reino1.mostrarCasas();
reino1.informacionDelRey();
casa1.listarMiembros();

/* PRESENTACIONES DE LOS PERSONAJES  */

personaje1.saludar();
personaje2.saludar();
personaje3.saludar();

/*  PRESENTACION DE LAS ARMAS  */

arma1.descripcion();
arma2.descripcion();
