import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { AhorcadoComponent } from './component/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './component/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './component/preguntados/preguntados.component';
import { DetenerTiempoComponent } from './component/detener-tiempo/detener-tiempo.component';


@NgModule({
  declarations: [
    AhorcadoComponent,
    MayorMenorComponent,
    PreguntadosComponent, 
    DetenerTiempoComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
