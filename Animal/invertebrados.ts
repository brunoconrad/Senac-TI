class Invertebrados {

    private TipoDePorifera: string
    private CorDePorifera: string
    private TipoDePlatelminto: string
    private CorDePaltelminto: string

    constructor(tipoPorifera: string, CorPorifera: string,
         tipoPaltelminto:string, CorPaltelminto:string){

        this.TipoDePorifera = tipoPorifera
        this.CorDePorifera = CorPorifera
        this.TipoDePlatelminto = tipoPaltelminto
        this.CorDePaltelminto = CorPaltelminto
    }

    // Poriferos
    public definirTipoDePorifera(): string{
        return this.TipoDePorifera
    }
    public definirCorDePorifera(): string{
        return this.CorDePorifera
    }

    // Paltelmintos
    public definirTipoPaltelminto(): string{
        return this.TipoDePlatelminto
    }
    public definirCorDePaltelminto(): string{
        return this.CorDePaltelminto
    }
}