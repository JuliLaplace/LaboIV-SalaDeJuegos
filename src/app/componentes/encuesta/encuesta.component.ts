import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SesionService } from '../../servicios/sesion.service';
import { FormsModule } from '@angular/forms';
import { EncuestaService } from '../../servicios/encuesta.service';



@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css'
})
export class EncuestaComponent {

  nombreIngresado:string="";
  apellidoIngresado:string="";
  edadIngresada:number = 0;
  telefonoIngresado: number=0;
  juegoFavoritoSeleccionado: string ="";
  mensajeIngresado : string="";
  nivelSatisfaccion:number =0;


  constructor(public sesion: SesionService, private servicioEncuesta: EncuestaService) {

    
  }


  enviarEncuesta(){
    this.servicioEncuesta.crearRegistro(this.nombreIngresado, this.apellidoIngresado, this.edadIngresada, this.telefonoIngresado, this.mensajeIngresado, this.juegoFavoritoSeleccionado, this.nivelSatisfaccion)
  }
}
