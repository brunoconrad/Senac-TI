import { Component, OnInit , Input} from '@angular/core'
import {Pessoa} from './../pessoa.model'

@Component({
    // selector é nome para o componente
    selector: 'app-main',
    templateUrl: './main.componente.html'
})

export class MainComponente implements OnInit{
  public pessoa = new Pessoa()
  public pessoas : Pessoa[] = []
  public numeroArray: Number = 0

  constructor() { 
    this.limparAtributos()
  }

  ngOnInit() {
  }

  enviarCadastro(){
    this.pessoas.push(this.pessoa)
    this.numeroArray = this.pessoas.length
    this.pessoa = new Pessoa()  
    this.limparAtributos()
    
  }
  definirNome(texto): void{
    this.pessoa.Nome = ((<HTMLInputElement>texto.target).value)
  }
  definirSobrenome(texto): void{
    this.pessoa.Sobrenome = ((<HTMLInputElement>texto.target).value)
  }
  limparAtributos(): void{
    this.pessoa.Nome = ''
    this.pessoa.Sobrenome = ''

}
}
