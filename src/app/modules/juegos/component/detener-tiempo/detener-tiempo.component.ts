import { Component } from '@angular/core';

@Component({
  selector: 'app-detener-tiempo',
  templateUrl: './detener-tiempo.component.html',
  styleUrl: './detener-tiempo.component.css'
})
export class DetenerTiempoComponent {

 
  vidasUsuario: number = 3;
  vidas: boolean[] = [true, true, true]; //las uso para mostrar los corazones rosas (true) o negros (false)
  juegoFinalizado: boolean = false;
  score: number = 0;
  mostrarResultado: boolean = false;
  mensajeResultado!: string;
  tiempoActual = 0;
  usuarioJugando: boolean = false;
  intervalo: any;
  tiempoObjetivo: number = 5; // Tiempo objetivo en segundos
  incrementoTiempoObjetivo: number = 5;
  mostrarReglas: boolean = true;


  constructor() {
  }

  iniciarJuego() {
    this.usuarioJugando = true;
    this.tiempoActual = 0;
    this.mostrarResultado = false;
    this.mensajeResultado = '';

    // arranco el cronometro
    this.intervalo = setInterval(() => {
      this.tiempoActual += 0.1; // incremetno tiempo en decimas de segundos
    }, 100);
  }

  detener() {

    if (!this.usuarioJugando) {
      return; //aca voy a tener que mostrar que perdió
    }

    this.mostrarResultado = true;
    this.tiempoActual = parseFloat(this.tiempoActual.toFixed(1));
    const resultadoTiempo = Math.abs(this.tiempoObjetivo - this.tiempoActual);
    console.log('Tiempo detenido: ', this.tiempoActual, ' - Diferencia: ', resultadoTiempo);

    if(resultadoTiempo == 0){
      this.mensajeResultado = `¡Perfecto! Paraste a tiempo.`;
      this.score += 5; 
    } else if(resultadoTiempo < 0.5) { 
      this.mensajeResultado = `¡Muy bien! La diferencia fue por solo ${resultadoTiempo.toFixed(1)} segundos.`;
      this.score += 2; 
    } else if (resultadoTiempo < 1) {
      this.mensajeResultado = `Casi! Le erraste por ${resultadoTiempo.toFixed(1)} segundos.`;
      this.score += 1;
    } else { //mas de dos segundos, perdés una vida.
      this.mensajeResultado = `¡Fallaste! Te equivocaste por ${resultadoTiempo.toFixed(1)} segundos.`;
      this.perderVida();
    }

    if (this.vidasUsuario > 0) {
      this.incrementarTiempoObjetivo(); // incremento el tiempo objetivo
    }

    if (this.vidasUsuario === 0) {
      this.juegoFinalizado = true;
      this.mensajeResultado = '¡Te quedaste sin vidas!';
      clearInterval(this.intervalo); // se detiene el cronometro
      return;
    } 
  }

 
  incrementarTiempoObjetivo() {
    this.tiempoObjetivo += this.incrementoTiempoObjetivo;
  }

  perderVida() {
    if (this.vidasUsuario > 0) {
      this.vidasUsuario--;
      this.vidas[this.vidasUsuario] = false;
    }
  }

  reiniciarJuego() {
    this.juegoFinalizado = false;
    this.vidasUsuario = 3;
    this.vidas = [true, true, true];
    this.score = 0;
    this.tiempoObjetivo = 5;
    this.tiempoActual = 0;
    this.mostrarResultado = false;
    this.usuarioJugando = false;
    this.mensajeResultado = '';
    
  }
  ocultarReglas() {
    this.mostrarReglas = false;
  }
}
