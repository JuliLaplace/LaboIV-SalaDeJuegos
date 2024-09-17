import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoggerService } from '../../servicios/logger.service';

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

  constructor(public auth: Auth, public router: Router, private servicioLogger: LoggerService) {
    
  }

  limpiarCampos() {  //hacer interfaz
    this.email = "";
    this.pwd = "";
  }

  registrar() {
    createUserWithEmailAndPassword(this.auth, this.email, this.pwd)
    .then((res) => {
      this.servicioLogger.crearLog();
      this.limpiarCampos();
      this.router.navigate(['/home']);
      this.errorFlag = false;
    })
    .catch((e) => {
      this.errorFlag = true;
      switch (e.code) {
        case "auth/invalid-email":
          this.errorMsj = "Email invalido";
          break;
        case "auth/email-already-in-use":
          this.errorMsj = "Email ya registrado";
          break;
        case "auth/weak-password":
          this.errorMsj = "Contraseña demasiado débil";
          break;
        case "auth/missing-password":
          this.errorMsj = "Debe ingresar una contraseña";
          break;
        case "auth/missing-email":
          this.errorMsj = "Debe ingresar un email para registrarse";
          break;
        default:
          this.errorMsj = e.code
          break;
      }
    });
  }

}
