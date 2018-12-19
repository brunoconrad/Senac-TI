import { Monitor } from '../models/monitor.model'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'


@Injectable() export class MonitoresService {

  constructor(private http:Http){

  }


    public monitores: Monitor[] =
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

public getProdutosPromise(): Promise<Monitor[]>{
  return new Promise((resolve, reject) =>{  
      resolve(this.monitores)
  })
}

public getProdutosPromiseAPI(): Promise<Monitor>{
  return this.http.get('http://localhost:3000/monitores').toPromise().then((moni:any)=> moni.json())
}

public getProdutoPorIdAPI(id: number): Promise<Monitor>{
  return this.http.get(`http://localhost:3000/monitores?id=${id}`).toPromise().then((moni: any)=>moni.json())
}

}