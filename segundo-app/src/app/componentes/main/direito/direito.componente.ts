import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
    // selector é nome para o componente
    selector: 'app-direito',
    templateUrl: './direito.componente.html'
})

export class DireitoComponente implements OnInit{
    
    //Output serve para lançar eventos para um nível superior OUTPUT 1
    @Output() public definirTextoNoMain: EventEmitter<string> = new EventEmitter()
  
    //Momento em que atribuo algo ao meu emissor de evento OUTPUT 2
    public enviarTexto(): void{
      this.definirTextoNoMain.emit('Texto Emitido!')
    }
  
    constructor() { }
  
    ngOnInit() {
      this.enviarTexto()
    }
  
}
  