export class arma{
    protected capacidade: number
    protected projeteisNoPente: number

    constructor(projeteis:number, capacidade:number){
        this.capacidade = capacidade
        this.projeteisNoPente = projeteis
    }
    public atirar(N:number=1): void{
        if (this.projeteisNoPente == 0){
            console.log('Não tem munição')
        }
        else{
            this.projeteisNoPente -= N
                for(var x=1; x<= N;x++){
                    console.log('Pistola diz: paaa')
                }
                if(this.informarBalas() > 0){
                    console.log('Você tem ainda '+this.informarBalas()+' munições')   
                }
                else{
                    console.log('Não tem munição')
                }
        }
    }
    
    public recarregar(): void{
        this.projeteisNoPente = this.capacidade
    }

    public informarBalas(): number{
        return this.projeteisNoPente
    }
}
