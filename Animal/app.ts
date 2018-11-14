import { animal } from "./animal";
import { zoo } from "./zoologico";

let conjunto : Array<animal> = []
let toto = new animal(2,3,'Cachorro')
let gato = new animal(3, 2, 'Preto')
let coelho = new animal(3, 2, 'Rapido')

let zoologico = new zoo('Sapucaia', conjunto)

conjunto.push(toto)
conjunto.push(gato)
conjunto.push(coelho)

console.log(zoologico)