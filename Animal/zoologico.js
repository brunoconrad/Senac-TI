"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class zoo {
    constructor(end, list) {
        this.endereco = end;
        this.listaDeAnimais = list;
    }
    mostrarEndereco() {
        return this.endereco;
    }
    mostrarListaAnimais() {
        return this.listaDeAnimais;
    }
}
exports.zoo = zoo;
