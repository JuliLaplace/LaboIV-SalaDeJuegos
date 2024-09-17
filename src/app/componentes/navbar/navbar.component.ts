import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  constructor(public auth: Auth, public router: Router) {

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
        signOut(this.auth).then(() => {
          Swal.fire({
            title: '¡Cerraste sesión!',
            text: 'Tu sesión ha sido cerrada correctamente. ',
            icon: 'success', 
            confirmButtonColor: "#343B55", 
            confirmButtonText: "<h5 style='color:#FFC2F8; margin:0px;'> OK </h5>",
          }
          );
          this.router.navigate(['/login']);
        }).catch((error) => {
          Swal.fire('Error', 'Ocurrió un problema al cerrar sesión.', 'error');
        });
      }
    });




    
  }


  // signOut(this.auth).then(() => {
  //   this.router.navigate(['/login']);
  // })
}







