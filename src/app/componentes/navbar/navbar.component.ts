import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2'
import { LoginService } from '../../servicios/login.service';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  constructor(private loginService: LoginService, public sesion : SesionService) {

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
        this.loginService.logout().then(() => {
          Swal.fire({
            title: '¡Cerraste sesión!',
            text: 'Tu sesión ha sido cerrada correctamente. ',
            icon: 'success', 
            confirmButtonColor: "#343B55", 
            confirmButtonText: "<h5 style='color:#FFC2F8; margin:0px;'> OK </h5>",
          }
          );
          // this.router.navigate(['/login']);
        }).catch((error) => {
          Swal.fire('Error', 'Ocurrió un problema al cerrar sesión.', 'error');
        });
      }
    });
    
  }


 
}







