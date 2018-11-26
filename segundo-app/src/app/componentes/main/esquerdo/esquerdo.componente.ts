import { Component, OnInit, Input } from '@angular/core';

@Component({
    // selector é nome para o componente
    selector: 'app-esquerdo',
    templateUrl: './esquerdo.componente.html'
})

export class EsquerdoComponente implements OnInit{
    @Input() public Numero: number =0
    constructor(){
       
     }
   
     ngOnInit(){
       
     }
}