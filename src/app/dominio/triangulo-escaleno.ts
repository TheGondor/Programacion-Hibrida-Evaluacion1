import { FiguraGeometrica } from "./figura-geometrica";

export class TrianguloEscaleno extends FiguraGeometrica
{
    private ladoA: number;
    private ladoB: number;
    private ladoC: number;

    constructor (ladoA: number, ladoB: number, ladoC: number)
    {
        super("Triangulo");
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    public override calcularPerimetro(): number 
    {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}