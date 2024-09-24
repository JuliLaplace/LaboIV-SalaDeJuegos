import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  email: string = "";
  pwd: string = "";
  errorFlag: boolean = false;
  errorMsj: string = "";

  constructor(public router: Router, public registro : LoginService) {
    
  }

  

  registrar() {
    this.registro.registrar(this.email, this.pwd)
    .then((respuesta)=>{
      this.errorFlag = respuesta.errorFlag;
      this.errorMsj = respuesta.errorMsj;
      this.limpiarCampos();
    })
  }

  limpiarCampos() {  //hacer interfaz
    this.email = "";
    this.pwd = "";
  }

}
