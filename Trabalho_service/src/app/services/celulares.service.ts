import { Celular } from '../models/celular.model'



export class CelularesService {

    public celulares: Celular[] =
[
  {
   id: 1,
   nome: 'Galaxy J7',
   descricao: 'Smartphone Samsung Galaxy J7 Pro Android 7.0 Tela 5.5" Octa-Core 64GB 4G Wi-Fi Câmera 13MP - Preto',
   valor: 'R$ 1.198,00'  
  },   
  {
    id: 2,
    nome: 'iPhone Xr',
    descricao: 'iPhone Xr 128GB Preto IOS12 4G + Wi-fi Câmera 12MP - Apple',
    valor: 'R$ 5.499,99'  
  },
  {
    id: 3,
    nome: 'Galaxy S9',
    descricao: 'Smartphone Samsung Galaxy S9 Dual Chip Android 8.0 Tela 5.8" Octa-Core 2.8GHz 128GB 4G Câmera 12MP - Preto',
    valor: 'R$ 2.999,00'  
  },
  {
    id: 4,
    nome: 'Asus Zenfone 5',
    descricao: 'Smartphone Asus Zenfone 5 64GB Dual Chip Android Oreo Tela 6.2" Snapdragon 636 Octacore 4G Câmera 12MP + 8MP (Dual Traseira) 3300mAh - Preto',
    valor: 'R$ 2.199,00'  
  }
]

    public getCelulares(): Array<Celular> {
        return this.celulares
    }
    
    public getCelularPorId(id: number): 
    Celular{
        let celularesInternos: Celular[]
        celularesInternos =
         this.getCelulares()
        return celularesInternos[id -1]
    }

}