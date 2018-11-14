import {pessoa} from './pessoa'
import {paciente} from './paciente'
import {medico} from './medico'
import {operador} from './operador'

let logarPaciente = new paciente(123, 'paciente', '')
logarPaciente.logar()

let logarMedico = new medico(123, 'medico')
logarMedico.logar()

let logarOperador = new operador(123, 'operador')
logarOperador.logar()

let data = new paciente(123, 'paciente', '12/12/2018')
data.Consulta()
