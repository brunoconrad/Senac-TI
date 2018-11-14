import {pessoa} from './pessoa'

export class operador extends pessoa{
    private senhaOperador:string = 'operador'
    private cpfOperador:number = 123
    
    public logar(): void{
        if(this.cpf == this.cpfOperador && this.senha == this.senhaOperador){
            console.log('logado Operador')
        }
        else{
            console.log('errrooooooouuuuu, Operador')
        }
    }
}