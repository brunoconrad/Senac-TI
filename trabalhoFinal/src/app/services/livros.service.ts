import { Livro } from '../models/livro.model'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'


@Injectable() export class LivrosService {

  constructor(private http:Http){

  }

    public livros: Livro[] =
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

    public getProdutosPromise(): Promise<Livro[]>{
      return new Promise((resolve, reject) =>{  
          resolve(this.livros)
      })
    }

    public getProdutosPromiseAPI(): Promise<Livro>{
      return this.http.get('http://localhost:3000/livros').toPromise().then((liv:any)=> liv.json())
    }
  
    public getProdutoPorIdAPI(id: number): Promise<Livro>{
      return this.http.get(`http://localhost:3000/livros?id=${id}`).toPromise().then((liv: any)=>liv.json())
    }

}