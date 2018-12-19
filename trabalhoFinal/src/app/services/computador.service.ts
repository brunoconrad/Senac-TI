import { Computador } from '../models/computador.model'



export class ComputadoresService {

    public computadores: Computador[] =
[
  {
   id: 1,
   nome: 'Dell Inspiron INS-3470-M20M',
   descricao: 'Computador Dell Inspiron INS-3470-M20M 8ª Geração Intel Core i3 4GB 1TB Windows 10 Monitor 21,5"',
   valor: 'R$ 3.109,00'  
  },   
  {
    id: 2,
    nome: 'EasyPC Desktop',
    descricao: 'Computador EasyPC Desktop Intel Core i3 4GB DDR3 HD 1TB HDMI Áudio 5.1 Monitor LG LED 19.5',
    valor: 'R$ 5.499,99'  
  },
  {
    id: 3,
    nome: 'Pichau Gamer RTB Osíris',
    descricao: 'Computador Pichau Gamer RTB Osíris, i5-7500,GeForce GTX 1070 8GB Gigabyte Windforce OC, Ram 8Gb, HD 1Tb, 500W, Spec-Alpha',
    valor: 'R$4.431,75'  
  },
  {
    id: 4,
    nome: 'Pichau Gamer RTB',
    descricao: 'Computador Pichau Gamer RTB, i5-8400, GeForce GTX 1060 6GB Galax OC, 8GB DDR4, HD 1TB, 500w, Rostock RGB',
    valor: 'R$4.319,04'  
  }
]

    public getComputadores(): Array<Computador> {
        return this.computadores
    }
    
    public getComputadorPorId(id: number): 
    Computador{
        let computadoresInternos: Computador[]
        computadoresInternos =
         this.getComputadores()
        return computadoresInternos[id -1]
    }

}