"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paciente_1 = require("./paciente");
const medico_1 = require("./medico");
const operador_1 = require("./operador");
let logarPaciente = new paciente_1.paciente(123, 'paciente', '');
logarPaciente.logar();
let logarMedico = new medico_1.medico(123, 'medico');
logarMedico.logar();
let logarOperador = new operador_1.operador(123, 'operador');
logarOperador.logar();
let data = new paciente_1.paciente(123, 'paciente', '12/12/2018');
data.Consulta();
