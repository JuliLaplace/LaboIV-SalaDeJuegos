import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { PaginaErrorComponent } from './componentes/pagina-error/pagina-error.component';

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
        path: '**',
        component: PaginaErrorComponent,
    
      }
];
