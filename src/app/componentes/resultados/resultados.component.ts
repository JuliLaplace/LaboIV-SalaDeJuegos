import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ResultadosService } from '../../servicios/resultados.service';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent implements OnDestroy {

  juegoSeleccionado: string | null = null;
  constructor(public servicioResultado : ResultadosService) {

    
  }

  seleccionarJuego(juego: string) {
    this.juegoSeleccionado = juego;
    this.servicioResultado.obtenerDatos(juego); 
  }
  ngOnDestroy() {
    this.servicioResultado.coleccionResultados = []; //para limpiar la tabla
  }
}
