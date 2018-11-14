export class animal{

    private quantidadeDeDentes: number
    private quantidadeDeOlhos: number
    private nome:string

    //constructor da minha classe
    //Para que animal seja criada
    //quero que defina quantidade de dentes
    // e olhos

    constructor(qtdDentes: number, qtdDeOlhos: number, nomeAnimal:string){
        this.quantidadeDeDentes = qtdDentes
        this.quantidadeDeOlhos = qtdDeOlhos
        this.nome = nomeAnimal
    }

    public definirDentes(): number{
        return this.quantidadeDeDentes
    }

    public definirOlhos(): number{
        return this.quantidadeDeOlhos
    }

    public nomeAnimal(): string{
        return this.nome
    }

}