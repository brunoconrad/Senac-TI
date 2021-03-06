import { Computador } from '../models/computador.model'
import { Http } from '@angular/http'
import { Injectable } from '@angular/core'


@Injectable() export class ComputadoresService {

  constructor(private http:Http){

  }

    public computadores: Computador[] = []

    public getProdutosPromise(): Promise<Computador[]>{
      return new Promise((resolve, reject) =>{  
          let funciona = true
        if(funciona){
          resolve(this.computadores)
        }else
        reject({tipo_erro: 'produto falso', mensagem: 'produto pirata'})
          
      })
    }

    public getProdutosPromiseAPI(): Promise<Computador[]>{
      return this.http.get('http://localhost:3000/computadores').toPromise().then((pc:any)=> pc.json())
    }
  
    public getProdutoPorIdAPI(id: number): Promise<Computador>{
      return this.http.get(`http://localhost:3000/computadores?id=${id}`).toPromise().then((pc: any)=>pc.json())
    }

}