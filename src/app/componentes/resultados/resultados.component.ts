import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResultadosService } from '../../servicios/resultados.service';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {

  constructor(public servicioResultado : ResultadosService) {

    
  }

  seleccionarJuego(juego: string) {
    this.servicioResultado.obtenerDatos(juego); 
  }
}
