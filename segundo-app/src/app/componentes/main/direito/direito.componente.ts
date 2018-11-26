import { Component, OnInit, Input } from '@angular/core';

@Component({
    // selector é nome para o componente
    selector: 'app-direito',
    templateUrl: './direito.componente.html'
})

export class DireitoComponente implements OnInit{
    @Input() public Numero_N: number = 4
    constructor(){}

    ngOnInit(){

    }
}