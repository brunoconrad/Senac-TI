import {pessoa} from "./pessoa";

export class medico extends pessoa{
    private senhaMedico:string = 'medico'
    private cpfMedico:number = 123
    
    public logar(): void{
        if(this.cpf == this.cpfMedico && this.senha == this.senhaMedico){
            console.log('logado Medico')
        }
        else{
            console.log('errrooooooouuuuu, medico')
        }
    }
    
}