import { Celular } from '../models/celular.model'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'


@Injectable() 
export class CelularesService {

  constructor(private http:Http){
    
  }


    public celulares: Celular[] =
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

    
    public getProdutosPromise(): Promise<Celular[]>{
      return new Promise((resolve, reject) =>{  
        let funciona = true
        if(funciona){
          resolve(this.celulares)
        }else
        reject({tipo_erro: 'produto falso', mensagem: 'produto pirata'})
          
      })
    }

    public getProdutosPromiseAPI(): Promise<Celular>{
      return this.http.get('http://localhost:3000/celulares').toPromise().then((cel: any) => cel.json())
    }
  
    public getProdutoPorIdAPI(id: number): Promise<Celular>{
      return this.http.get(`http://localhost:3000/celulares?id=${id}`).toPromise().then((cel: any)=>cel.json())
    }



}