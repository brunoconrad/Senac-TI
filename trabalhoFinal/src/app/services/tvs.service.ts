import { Tv } from '../models/tv.model'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable() export class TvsService {

  constructor(private http:Http){

  }

    public produtos: Tv[] = []

    public getProdutosPromise(): Promise<Tv[]>{
      return new Promise((resolve, reject) =>{  
          
        let funciona = true
        if(funciona){
          resolve(this.produtos)
        }else
        reject({tipo_erro: 'produto falso', mensagem: 'produto pirata'})
          
      })
    }

    public getProdutosPromiseAPI(): Promise<Tv[]>{
      return this.http.get('http://localhost:3000/tvs').toPromise().then((prod:any)=> prod.json())
    }
  
    public getProdutoPorIdAPI(id: number): Promise<Tv>{
      return this.http.get(`http://localhost:3000/tvs?id=${id}`).toPromise().then((prod: any)=>prod.json())
    }


}