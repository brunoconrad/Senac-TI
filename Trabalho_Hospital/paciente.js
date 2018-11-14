"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
class paciente extends pessoa_1.pessoa {
    constructor(cpf, senha, dataConsultaPaciente) {
        super(cpf, senha);
        this.senhaPaciente = 'paciente';
        this.cpfPaciente = 123;
        this.dataConsultaPaciente = '12/12/2018';
        this.dataConsultaPaciente = dataConsultaPaciente;
    }
    logar() {
        if (this.cpf == this.cpfPaciente && this.senha == this.senhaPaciente) {
            console.log('logado Paciente');
        }
        else {
            console.log('errrooooooouuuuu, paciente');
        }
    } 
    Consulta() {
        if (this.dataConsultaPaciente == this.dataConsultaPaciente) {
            console.log('Sua consulta é hoje');
        }
        else {
            console.log('sua consulta é dia ' + this.dataConsultaPaciente);
        }
    }
    exame() {
    }
}
exports.paciente = paciente;
