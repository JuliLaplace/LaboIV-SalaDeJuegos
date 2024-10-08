import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { PaginaErrorComponent } from './componentes/pagina-error/pagina-error.component';
import { LogsComponent } from './componentes/logs/logs.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';


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
        path: 'logs',
        component: LogsComponent,
    
      },
      {
        path: 'chat',
        component: ChatComponent,
    
      },
      {
        path: 'resultados',
        component: ResultadosComponent,
    
      },
      {
        path: 'encuesta',
        component: EncuestaComponent,
    
      },
      {
        path: 'juegos',
        loadChildren: () => import('./modules/juegos/juegos.module').then(m => m.JuegosModule)
      },
      {
        path: '**',
        component: PaginaErrorComponent,
    
      }
];
