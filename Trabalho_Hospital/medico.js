"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
class medico extends pessoa_1.pessoa {
    constructor() {
        super(...arguments);
        this.senhaMedico = 'medico';
        this.cpfMedico = 123;
    }
    logar() {
        if (this.cpf == this.cpfMedico && this.senha == this.senhaMedico) {
            console.log('logado Medico');
        }
        else {
            console.log('errrooooooouuuuu, medico');
        }
    }
}
exports.medico = medico;
