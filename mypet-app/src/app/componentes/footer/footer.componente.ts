import { Component } from '@angular/core'

@Component({
    // selector é nome para o componente
    selector: 'footer',
    templateUrl: './footer.componente.html'
})

export class FooterComponente {

    public n1:string
    public n2:string

    exibirValor(valor: Event): void{
     
     this.n1 = (<HTMLInputElement>valor.target).value
     this.n2 = this.n1
    }
}
