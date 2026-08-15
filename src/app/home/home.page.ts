import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonText,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { CirculoComponent } from '../componentes/circulo/circulo.component';
import { TrianguloComponent } from '../componentes/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    NgIf,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonText,
    IonSelect,
    IonSelectOption,
    CirculoComponent,
    TrianguloComponent,
  ],
})
export class HomePage {
  figuraSeleccionada: string = '';
}
