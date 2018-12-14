import { Monitor } from '../models/monitor.model'



export class MonitoresService {

    public monitores: Monitor[] =
[
  {
   id: 1,
   nome: 'Samsung Curvo 24"',
   descricao: 'Monitor Gamer Samsung Curvo 24" QLED 144Hz 1ms, LC24FG73FQLXZD',
   valor: 'R$1.930,70'  
  },   
  {
    id: 2,
    nome: 'Monitor AOC',
    descricao: 'Monitor AOC B1 Series 21.5" 60Hz 5ms FlickerFree Led Widescreen, 22B1H',
    valor: 'R$585,11'  
  },
  {
    id: 3,
    nome: 'Monitor Asus',
    descricao: 'Monitor Asus 23.6" 75Hz 1ms VP247QG',
    valor: 'R$1.078,40'  
  },
  {
    id: 4,
    nome: 'Monitor AOC',
    descricao: 'Monitor AOC 23.6 Pol. LED Widescreen Preto, M2470SWD2',
    valor: 'R$723,88'  
  }
]

    public getMonitores(): Array<Monitor> {
        return this.monitores
    }
    
    public getMonitoresPorId(id: number): 
    Monitor{
        let monitoresInternos: Monitor[]
        monitoresInternos =
         this.getMonitores()
        return monitoresInternos[id -1]
    }

}