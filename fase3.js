import { Casa } from "./Class/casas.js";
import { Arma } from "./Class/arma.js";
import { Batalla } from "./Class/batalla.js";
import { Guerrero } from "./personajes/guerrero.js";

const casaStark = new Casa("Stark", "El invierno se acerca");
const casaLannister = new Casa("Lannister", "Oye mi rugido");

const garra = new Arma(90, "Garra", "espada");
const aguja = new Arma(70, "Aguja", "espada");
const hacha = new Arma(80, "Hacha del Norte", "hacha");
const espadaLarga = new Arma(85, "Espada Larga", "espada");
const ballesta = new Arma(75, "Ballesta", "ballesta");
const filoRojo = new Arma(88, "Filo Rojo", "espada");
const lanzaDeCaza = new Arma(60, "Lanza de Caza", "lanza");


// === GUERREROS DE LA CASA STARK ===
const jon = new Guerrero("Jon Snow", 25);
jon.agregarCasa(casaStark);
jon.equiparArma(garra);

const arya = new Guerrero("Arya Stark", 18);
arya.agregarCasa(casaStark);
arya.equiparArma(aguja);

const robb = new Guerrero("Robb Stark", 22);
robb.agregarCasa(casaStark);
robb.equiparArma(espadaLarga);

const brienne = new Guerrero("Brienne de Tarth", 30);
brienne.agregarCasa(casaStark);
brienne.equiparArma(hacha);

// === GUERREROS DE LA CASA LANNISTER ===
const jaime = new Guerrero("Jaime Lannister", 32);
jaime.agregarCasa(casaLannister);
jaime.equiparArma(filoRojo);

const cersei = new Guerrero("Cersei Lannister", 34);
cersei.agregarCasa(casaLannister);
cersei.equiparArma(lanzaDeCaza);

const tyrion = new Guerrero("Tyrion Lannister", 30);
tyrion.agregarCasa(casaLannister);
tyrion.equiparArma(ballesta);

const gregor = new Guerrero("Gregor Clegane", 38);
gregor.agregarCasa(casaLannister);
gregor.equiparArma(hacha);


// === AÑADIR PERSONAJES A LAS CASAS ===
casaStark.agregarMiembro(jon);
casaStark.agregarMiembro(arya);
casaStark.agregarMiembro(robb);
casaStark.agregarMiembro(brienne);

casaLannister.agregarMiembro(jaime);
casaLannister.agregarMiembro(cersei);
casaLannister.agregarMiembro(tyrion);
casaLannister.agregarMiembro(gregor);

casaStark.listarMiembros();
casaLannister.listarMiembros();


const batallaBastardos = new Batalla();
batallaBastardos.iniciarBatalla(casaStark,casaLannister);

batallaBastardos.mostrarGuerrerosMuertosEnBatalla();
