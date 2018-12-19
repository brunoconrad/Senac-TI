import { Produto } from '../models/produto.model'



export class ProdutosService {

    public produtos: Produto[] =
[
  {
   id: 1,
   nome: 'Galaxy J7',
   descricao: 'Smartphone Samsung Galaxy J7 Pro Android 7.0 Tela 5.5" Octa-Core 64GB 4G Wi-Fi Câmera 13MP - Preto',
   valor: 'R$ 1.198,00'  
  },   
  {
    id: 2,
    nome: 'Notebook',
    descricao: 'Notebook Essentials E20 Intel Celeron Dual Core 4GB 500GB LED HD 15,6" W10 Cinza Titânio - Samsung',
    valor: 'R$ 1.377,49'  
  },
  {
    id: 3,
    nome: 'Smart TV LED 32',
    descricao: 'Smart TV LED 32" Samsung 32J4290 HD com Conversor Digital 2 HDMI 1 USB Wi-Fi 60Hz - Preta',
    valor: 'R$ 899,99'  
  },
  {
    id: 4,
    nome: 'Lavadora de Roupas',
    descricao: 'Lavadora de Roupas Electrolux 16kg LAC16 - Branca',
    valor: 'R$ 1.579,99'  
  }
]

    public getProdutos(): Array<Produto> {
        return this.produtos
    }
    
    public getProdutoPorId(id: number): 
    Produto{
        let produtosInternos: Produto[]
        produtosInternos =
         this.getProdutos()
        return produtosInternos[id -1]
    }

}
