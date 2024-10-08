import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../servicios/sesion.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EncuestaService } from '../../servicios/encuesta.service';
import { FormViewerService } from '../../servicios/form-viewer.service';



@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css'
})
export class EncuestaComponent implements OnInit{

  altaEncuesta! : FormGroup;
  encuestaEnviada:boolean=false;
  

  constructor(public sesion: SesionService, private servicioEncuesta: EncuestaService, public servicioForm: FormViewerService)  {

    
  }
  ngOnInit(): void {
    this.altaEncuesta = new FormGroup({
      apellido : new FormControl('', [Validators.required, Validators.pattern(this.servicioForm.nombresRegex), Validators.minLength(3)]),
      nombre : new FormControl('', [Validators.required,Validators.pattern(this.servicioForm.nombresRegex), Validators.minLength(3)]),
      edad : new FormControl('', [Validators.pattern(this.servicioForm.numeroRegex), Validators.required, Validators.min(18), Validators.max(99)]),
      telefono : new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/),Validators.minLength(3),Validators.maxLength(10) ]),
      mensajeIngresado : new FormControl('', [Validators.required, Validators.maxLength(150)]),
      juegoFavoritoSeleccionado : new FormControl('', [Validators.required]),
      nivelDeSatisfaccion : new FormControl(0,[Validators.required]),
    })
  }

  
  cargarEncuesta(){
    if(this.altaEncuesta.valid){

      const apellido = this.altaEncuesta.get('apellido')?.value;
      const nombre = this.altaEncuesta.get('nombre')?.value;
      const edad = this.altaEncuesta.get('edad')?.value;
      const telefono = this.altaEncuesta.get('telefono')?.value;
      const mensaje = this.altaEncuesta.get('mensajeIngresado')?.value;
      const juegoFavorito = this.altaEncuesta.get('juegoFavoritoSeleccionado')?.value;
      const nivelSatisfaccion = this.altaEncuesta.get('nivelDeSatisfaccion')?.value;
  
      this.servicioEncuesta.crearRegistro(nombre,apellido, edad, telefono, mensaje, juegoFavorito, nivelSatisfaccion);
      this.encuestaEnviada=true;
      this.limpiarDatos();
    }
  }
  


  limpiarDatos(){
    this.altaEncuesta.reset({
      nivelDeSatisfaccion:0
    }); 

   
  }

}
