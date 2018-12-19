import { Computador } from '../models/computador.model'
import { Http } from '@angular/http'
import { Injectable } from '@angular/core'


@Injectable() export class ComputadoresService {

  constructor(private http:Http){

  }

    public computadores: Computador[] =
[
  {
   id: 1,
   nome: '',
   descricao: '',
   valor: '', 
   img: ''
  },   
  {
    id: 2,
    nome: '',
    descricao: '',
    valor: '', 
    img: '' 
  },
  {
    id: 3,
    nome: '',
    descricao: '',
    valor: '', 
    img: ''  
  },
  {
    id: 4,
    nome: '',
    descricao: '',
    valor: '', 
    img: ''  
  }
]

    
    public getProdutosPromise(): Promise<Computador[]>{
      return new Promise((resolve, reject) =>{  
          resolve(this.computadores)
      })
    }

    public getProdutosPromiseAPI(): Promise<Computador>{
      return this.http.get('http://localhost:3000/computadores').toPromise().then((pc:any)=> pc.json())
    }
  
    public getProdutoPorIdAPI(id: number): Promise<Computador>{
      return this.http.get(`http://localhost:3000/computadores?id=${id}`).toPromise().then((pc: any)=>pc.json())
    }

}