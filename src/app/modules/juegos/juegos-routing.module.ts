import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './component/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './component/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './component/preguntados/preguntados.component';
import { DetenerTiempoComponent } from './component/detener-tiempo/detener-tiempo.component';

const routes: Routes = [
  {
    path: 'ahorcado',
    component: AhorcadoComponent
  },
  {
    path: 'mayor-menor',
    component: MayorMenorComponent
  },
  {
    path: 'preguntados',
    component: PreguntadosComponent
  },
  {
    path: 'detener-tiempo',
    component: DetenerTiempoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
