import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoggerService } from '../../servicios/logger.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  pwd: string = "";
  errorMsj: string = "";
  flagError: boolean = false;
  public loginsCollection: any[] = [];
  
  constructor(public auth: Auth, public router: Router, public servicioLogger : LoggerService) { }
  
  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.pwd)
    .then((res) => {
      this.servicioLogger.logger();
      this.limpiarCampos();
      this.router.navigate(['/home']);
    })
    .catch((e) => {
      this.flagError = true;
      switch (e.code) {
        default:
          this.errorMsj = "Usuario o contraseña incorrectos."
          break;
        }
      })
    }
    
    



  registroAutomatico(param: string) {
    if (param == "ana") {
      this.email = "ana123@mail.com";
      this.pwd = "hola1234";
    } else if (param == "juli") {
      this.email = "juli@mail.com";
      this.pwd = "MortyMan";
    }
    else {
      this.email = "morty@morty.com";
      this.pwd = "pescaditos1";
    }
    this.flagError = false;
  }

  limpiarCampos() {  
    this.email = "";
    this.pwd = "";
  }
}
