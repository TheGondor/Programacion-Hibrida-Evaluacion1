import { DecimalPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonInput,
  IonItem,
  IonText,
} from '@ionic/angular/standalone';
import { TrianguloEscaleno } from '../../dominio/triangulo-escaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    DecimalPipe,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonItem,
    IonText,
    IonInput,
    IonButton,
  ],
})
export class TrianguloComponent {
  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;
  perimetro: number | null = null;

  calcularPerimetro(): void {
    const triangulo = new TrianguloEscaleno(
      Number(this.ladoA),
      Number(this.ladoB),
      Number(this.ladoC)
    );
    this.perimetro = triangulo.calcularPerimetro();
  }
}
