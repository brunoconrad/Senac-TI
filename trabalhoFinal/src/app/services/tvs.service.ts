import { Tv } from '../models/tv.model'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable() export class TvsService {

  constructor(private http:Http){

  }

    public produtos: Tv[] =
[
  {
   id: 1,
   nome: '',
   valor: '',
   descricao: '', 
   img: ''  
  },   
  {
    id: 2,
    nome: '',
    valor: '',
    descricao: '', 
    img: ''     
  },
  {
    id: 3,
    nome: '',
    valor: '',
    descricao: '',
    img: ''    
  },
  {
    id: 4,
    nome: '',
    valor: '',
    descricao: '',
    img: ''      
  }
]

    public getProdutosPromise(): Promise<Tv[]>{
      return new Promise((resolve, reject) =>{  
          resolve(this.produtos)
      })
    }

    public getProdutosPromiseAPI(): Promise<Tv>{
      return this.http.get('http://localhost:3000/tvs').toPromise().then((prod:any)=> prod.json())
    }
  
    public getProdutoPorIdAPI(id: number): Promise<Tv>{
      return this.http.get(`http://localhost:3000/tvs?id=${id}`).toPromise().then((prod: any)=>prod.json())
    }


}