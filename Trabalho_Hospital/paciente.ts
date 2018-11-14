import {pessoa} from "./pessoa";

export class paciente extends pessoa{
    private senhaPaciente:string = 'paciente'
    private cpfPaciente:number = 123
    private dataConsultaPaciente:string = '12/12/2018'

     constructor(cpf:number, senha:string, dataConsultaPaciente:string){
         super(cpf, senha)
         this.dataConsultaPaciente = dataConsultaPaciente       
    }
    
    public logar(): void{
        if(this.cpf == this.cpfPaciente && this.senha == this.senhaPaciente){
            console.log('logado Paciente')
        }
        else{
            console.log('errrooooooouuuuu, paciente')
        }
    }

    public Consulta():void{
        if(this.dataConsultaPaciente == this.dataConsultaPaciente){
            console.log('Sua consulta é hoje')
        }
        else{
            console.log('sua consulta é dia '+ this.dataConsultaPaciente)
        }
    }

    public exame():void{

    }
}