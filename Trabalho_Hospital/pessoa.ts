export class pessoa{
    protected nome:string;
    protected cpf:number;
    protected data_nascimento:string;
    protected senha:string;
    
    constructor(cpf:number, senha:string){
        this.cpf = cpf
        this.senha = senha
    }
}