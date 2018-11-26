import { arma } from "./Arma";

export class metralhadora extends arma{
    private TirosPorSegundos:number
     constructor(projeteis:number, capacidade:number, TirosPorSegundos:number){
        super(capacidade, projeteis)
        this.TirosPorSegundos = TirosPorSegundos        
    }
    public atirar(): void{
        if (this.projeteisNoPente == 0){
            console.log('Não tem munição')
        }
        else{
                this.projeteisNoPente -= this.TirosPorSegundos
                for(var x=0; x<= this.TirosPorSegundos;x++){
                    console.log('Fuzil diz: pooowwww')
                }
                if(this.informarBalas() > 0){
                    console.log('Você tem ainda '+this.informarBalas()+' munições')   
                }
                else{
                    console.log('Não tem munição')
                }
        }
    }
}