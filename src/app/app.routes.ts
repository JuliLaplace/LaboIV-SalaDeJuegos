import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { PaginaErrorComponent } from './componentes/pagina-error/pagina-error.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { MayorMenorComponent } from './componentes/mayor-menor/mayor-menor.component';
import { DetenerTiempoComponent } from './componentes/detener-tiempo/detener-tiempo.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    
      },
      {
        path: 'home',
        redirectTo: '', pathMatch: "full",
    
      },
      {
        path: 'sobre-mi',
        component: SobreMiComponent,
    
      },
      {
        path: 'login',
        component: LoginComponent,
    
      },
      {
        path: 'registro',
        component: RegistroComponent,
    
      },
      {
        path: 'chat',
        component: ChatComponent,
    
      },
      {
        path: 'ahorcado',
        component: AhorcadoComponent,
    
      },
      {
        path: 'preguntados',
        component: PreguntadosComponent,
    
      },
      {
        path: 'mayor-menor',
        component: MayorMenorComponent,
    
      },
      {
        path: 'detener-tiempo',
        component: DetenerTiempoComponent,
    
      },
      {
        path: '**',
        component: PaginaErrorComponent,
    
      }
];
