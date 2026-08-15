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
import { Circulo } from '../../dominio/circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
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
export class CirculoComponent {
  radio: number | null = null;
  perimetro: number | null = null;

  calcularPerimetro(): void {
    const circulo = new Circulo(Number(this.radio));
    this.perimetro = circulo.calcularPerimetro();
  }
}
