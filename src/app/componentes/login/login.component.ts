import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import { SesionService } from '../../servicios/sesion.service';

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
  
  constructor(private servicioLogin : LoginService, public sesion: SesionService) { }
  
  login() {
    this.servicioLogin.login(this.email, this.pwd)
    .then((respuesta) =>{
      this.errorMsj = respuesta.errorMsj;
      this.flagError = respuesta.errorFlag;
      this.limpiarCampos();
      });
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
