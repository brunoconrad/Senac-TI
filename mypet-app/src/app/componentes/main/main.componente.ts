import { Component } from '@angular/core'

@Component({
    // selector é nome para o componente
    selector: 'main',
    templateUrl: './main.componente.html'
})

export class MainComponente {
    //string interpolation
    public teste_main: string = 'xx'
    //property binding
    public imagem:string = './../../../assets/img/load.gif'

    exibirImagem(): void{
        if(this.imagem == '')
        this.imagem = './../../../assets/img/load.gif'
        else
        this.imagem = ''
    }
}

