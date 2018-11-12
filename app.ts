import {arma} from './Arma'
import {metralhadora} from './metralhadora'

let fuzil = new metralhadora(10, 10, 5)
fuzil.atirar()


let pistola = new arma(10,10)
pistola.atirar(3)