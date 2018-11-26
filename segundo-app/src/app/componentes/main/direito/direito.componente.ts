import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
    // selector é nome para o componente
    selector: 'app-direito',
    templateUrl: './direito.componente.html'
})

export class DireitoComponente implements OnInit{
    @Output() public definirTexto:EventEmitter<string> = new EventEmitter()

    
    constructor(){}

    ngOnInit(){

    }
}