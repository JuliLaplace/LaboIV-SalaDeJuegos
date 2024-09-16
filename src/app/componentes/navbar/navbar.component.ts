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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro de salir?',
      text: '',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(this.auth).then(() => {
          swalWithBootstrapButtons.fire(
            '¡Cerraste sesión!',
            'Tu sesión ha sido cerrada correctamente. ',
            'success'
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







