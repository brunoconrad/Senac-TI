import { Component, OnInit , Input} from '@angular/core'


@Component({
    // selector é nome para o componente
    selector: 'app-main',
    templateUrl: './main.componente.html'
})

export class MainComponente implements OnInit{
    //Variável interna da classe main
  public Texto: string
  public TextoNoMain: string = ''

  public textoNoMain(tipo: string): void{
    this.TextoNoMain=tipo
  }

  @Input() public Numero: number
  




  constructor() { }

  ngOnInit() {
  }
}
