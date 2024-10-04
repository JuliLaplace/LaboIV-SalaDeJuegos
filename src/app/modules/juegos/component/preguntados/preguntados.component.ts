import { Component } from '@angular/core';
import { PreguntadosPersonajesService } from '../../../../servicios/rick-morty-api.service';
import { ResultadosService } from '../../../../servicios/resultados.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css'
})
export class PreguntadosComponent {

  
  
  personajes : any [] = [];
  personajeParaAdivinar: any;
  cantidadPersonajes: number = 826;

  personajesUsados : number[] = [];
  vidasUsuario: number = 3;
  vidas: boolean[] = [true, true, true]; //las uso para mostrar los corazones rosas (true) o negros (false)
  juegoFinalizado: boolean = false;
  score: number = 0;
  mostrarResultado: boolean = false;
  mensajeResultado!: string;
  


  constructor(private servicioPreguntas: PreguntadosPersonajesService, private servicioResultado : ResultadosService) {
  }

  ngOnInit(): void {
    this.servicioPreguntas.obtenerPersonajes(this.generarNumerosRandom(this.personajesUsados)).subscribe(respuesta =>{
      this.personajes = respuesta;
      this.personajeParaAdivinar = this.elegirNumeroRandom(this.personajes);
    });

    
  }
  generarNumerosRandom(idUsados: number[]): number[] {
    const numeros: number[] = [];
    while (numeros.length < 4) {
      const randomNum = Math.floor(Math.random() * (826 - 1 + 1)) + 1;
      if (!numeros.includes(randomNum) && !idUsados.includes(randomNum)) {
        numeros.push(randomNum);
        
      }
    }
    
    return numeros;
  }

  elegirNumeroRandom(numeros: number[]): number {
    const idPersonaje = Math.floor(Math.random() * numeros.length);
    return numeros[idPersonaje];
  }
 




  adivinar(opcionElegida:string) {

    if (this.juegoFinalizado) {
      return; //aca voy a tener que mostrar que perdió
    }
    this.personajesUsados.push(this.personajeParaAdivinar.id);
    if (opcionElegida === this.personajeParaAdivinar.name) {
      this.mensajeResultado = '¡Correcto!';
      this.score += 1;
    } else {
      this.mensajeResultado = '¡Fallaste!';
      this.perderVida();
    } 
    this.mostrarResultado = true;





    if (this.vidasUsuario === 0) {
      this.juegoFinalizado = true;
      this.mensajeResultado = '¡Te quedaste sin vidas!';
      this.servicioResultado.crearRegistro(this.score, "Preguntados");
      return;
    } else {
      
      this.servicioPreguntas.obtenerPersonajes(this.generarNumerosRandom(this.personajesUsados)).subscribe(respuesta =>{
        this.personajes = respuesta;
        this.personajeParaAdivinar = this.elegirNumeroRandom(this.personajes);
        
      });
    }
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

    this.mostrarResultado = false;
    this.servicioPreguntas.obtenerPersonajes(this.generarNumerosRandom(this.personajesUsados)).subscribe(respuesta =>{
      this.personajes = respuesta;
      this.personajeParaAdivinar = this.elegirNumeroRandom(this.personajes);
      console.log(this.personajes)
    });
  }

}
