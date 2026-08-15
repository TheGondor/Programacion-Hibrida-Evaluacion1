import { FiguraGeometrica } from "./figura-geometrica";

export class Circulo extends FiguraGeometrica
{
    private radio: number;

    constructor (radio: number)
    {
        super("Circulo");
        this.radio = radio;
    }

    public override calcularPerimetro(): number 
    {
        return this.radio * Math.PI;
    }
}