"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var pessoa_1 = require("./pessoa");
var paciente = /** @class */ (function (_super) {
    __extends(paciente, _super);
    function paciente(cpf, senha, dataConsultaPaciente) {
        var _this = _super.call(this, cpf, senha) || this;
        _this.senhaPaciente = 'paciente';
        _this.cpfPaciente = 123;
        _this.dataConsultaPaciente = '12/12/2018';
        _this.dataConsultaPaciente = dataConsultaPaciente;
        return _this;
    }
    paciente.prototype.logar = function () {
        if (this.cpf == this.cpfPaciente && this.senha == this.senhaPaciente) {
            console.log('logado Paciente');
        }
        else {
            console.log('errrooooooouuuuu, paciente');
        }
    };
    paciente.prototype.Consulta = function () {
        if (this.dataConsultaPaciente == this.dataConsultaPaciente) {
            console.log('Sua consulta é hoje');
        }
        else {
            console.log('sua consulta é dia ' + this.dataConsultaPaciente);
        }
    };
    paciente.prototype.exame = function () {
    };
    return paciente;
}(pessoa_1.pessoa));
exports.paciente = paciente;
