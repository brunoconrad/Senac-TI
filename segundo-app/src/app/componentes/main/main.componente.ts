import { Component, OnInit } from '@angular/core'

@Component({
    // selector é nome para o componente
    selector: 'app-main',
    templateUrl: './main.componente.html'
})

export class MainComponente implements OnInit{
    //Variável interna da classe main
  public Interno: number = 10
  public TextoNoMain: string = ''

  public textoNoMain(tipo: string): void{
    this.TextoNoMain=tipo
  }

  constructor() { }

  ngOnInit() {
  }
}
