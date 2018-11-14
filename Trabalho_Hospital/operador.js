"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
class operador extends pessoa_1.pessoa {
    constructor() {
        super(...arguments);
        this.senhaOperador = 'operador';
        this.cpfOperador = 123;
    }
    logar() {
        if (this.cpf == this.cpfOperador && this.senha == this.senhaOperador) {
            console.log('logado Operador');
        }
        else {
            console.log('errrooooooouuuuu, Operador');
        }
    }
}
exports.operador = operador;
