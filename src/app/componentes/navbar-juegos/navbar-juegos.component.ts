import { Component } from '@angular/core';
import { SesionService } from '../../servicios/sesion.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar-juegos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar-juegos.component.html',
  styleUrl: './navbar-juegos.component.css'
})
export class NavbarJuegosComponent {

  score:number=0;
  constructor(public sesion: SesionService, private login : LoginService) {

  }

  cerrarSesion() {
    Swal.fire({
      title: "¿Estás seguro de salir?",
      text: "",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#42b54d",
      confirmButtonText: "Sí, me voy",
      cancelButtonText: "No, me quedo :)"
    }).then((result) => {
      if (result.isConfirmed) {
        this.login.logout().then(() => {
          Swal.fire({
            title: '¡Cerraste sesión!',
            text: 'Tu sesión ha sido cerrada correctamente. ',
            icon: 'success', 
            confirmButtonColor: "#343B55", 
            confirmButtonText: "<h5 style='color:#FFC2F8; margin:0px;'> OK </h5>",
          }
          );
        }).catch((error) => {
          Swal.fire('Error', 'Ocurrió un problema al cerrar sesión.', 'error');
        });
      }
    });
    
  }

}
