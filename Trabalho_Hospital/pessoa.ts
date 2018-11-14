export class pessoa{
    protected cpf:number;
    protected senha:string;
    
    constructor(cpf:number, senha:string){
        this.cpf = cpf
        this.senha = senha
    }
}