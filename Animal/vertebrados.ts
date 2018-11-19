class vertebrados{

    /*- Peixes
    - Anf�bio
    - 3 atributos 2 m�todos
    - Mam�fero
    - 4 atributos 4 m�todos
    - Aves
    - 4 atributos 4 m�todos
    - R�pteis
    - 2 atributos 2 m�todos*/

    private tipoDePeixe: string
    private tipoDeAgnato: string
    private tipoDeOsseo: string
    private tipoDeAnfibio: string
    private tipoDeMamifero: string

    constructor(TipoPeixe:string, TipoAgnato:string, TipoOsseo: string, TipoAnfibio:string, 
        TipoMamifero:string){
        this.tipoDePeixe = TipoPeixe
        this.tipoDeAgnato = TipoAgnato
        this.tipoDeOsseo = TipoOsseo
        this.tipoDeAnfibio = TipoAnfibio
        this.tipoDeMamifero = TipoMamifero
    }

    // Peixes definir se é AGNATOS, OSSEOS OU CARTILAGINOSOS
    public definirGrupoPeixe(): string{
        return this.tipoDePeixe
    }
    // Peixes definir se é LAMPREIAS OU FEITICEIRAS
    public definirGrupoDeAgnato():string{
        return this.tipoDeAgnato
    }
    // Peixes definir tipo de osseo 
    public definirTipoDeOsseo():string{
        return this.tipoDeOsseo
    }

    // Anfibio
    public definirTipoDeAnfibio():string{
        return this.tipoDeAnfibio
    }


    // Mamifero
    public definirTipoDeMamifero():string{
        return this.tipoDeMamifero
    }
}