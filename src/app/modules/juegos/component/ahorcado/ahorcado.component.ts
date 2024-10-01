import { Component } from '@angular/core';
import { AhorcadoService } from '../../../../servicios/ahorcado.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {

  vidasUsuario: number = 6;
  vidas: boolean[] = [true, true, true, true, true, true];
  resultado: boolean = false;;
  mesajeResultado!: string;
  juegoFinalizado: boolean = false;
  palabraParaAdivinar!: string;
  letrasPorAdivinar: string[] = []; //array con las letras de la palabra para adivinar
  letrasYaUsadas : string[]=[];
  letrasAcertadas: string [] = [];

  score : number = 0;

  constructor( public ahorcado: AhorcadoService) {}

  ngOnInit(): void {
    this.iniciarJuego();
    
  }

  iniciarJuego(){
    this.palabraParaAdivinar = this.ahorcado.obtenerPalabra();
    this.letrasPorAdivinar = this.obtenerLetrasPalabra();
    console.log(this.palabraParaAdivinar)
  }


 

  obtenerLetrasPalabra(): string[] {
    return this.palabraParaAdivinar.split('');
  }

  letraSeleccionadaBotonera(letra: string) {
    this.resultado=true;

    if(this.vidasUsuario>0){
      this.letrasYaUsadas.push(letra);
      if(this.palabraParaAdivinar.includes(letra)){
        this.mesajeResultado="¡Correcto!"
        this.score +=1;
        this.letrasAcertadas.push(letra);

       this.verificarUsuarioGano();

      }else{
        this.mesajeResultado="¡Fallaste!"
        this.perderVida();
      }
    }

    if (this.vidasUsuario === 0) {
      this.juegoFinalizado = true;
      this.mesajeResultado="Perdiste. La palabra era: " + this.palabraParaAdivinar;
      
    }
  }

  mostrarLetra(letra : string){
    return this.letrasAcertadas.includes(letra) ? letra : '_';
  }
 
  letraUsada(letra:string):boolean{
    return this.letrasYaUsadas.includes(letra);
  }

  perderVida() {
    if (this.vidasUsuario > 0) {
      this.vidasUsuario--;
      this.vidas[this.vidasUsuario] = false;
    }
  }
  reiniciarVidas(){
    this.vidasUsuario = 6;
  }

  reiniciarJuego(){
    this.juegoFinalizado = false;
    this.vidasUsuario = 6;
    this.vidas = [true, true, true, true, true, true];
    this.score = 0;
    this.letrasYaUsadas = []; // Restablecer letras ya usadas
    this.letrasAcertadas = [];
    this.resultado=false;
    this.iniciarJuego();
  }

  verificarUsuarioGano(){
    if (this.letrasAcertadas.length === this.letrasPorAdivinar.length) {
      this.juegoFinalizado = true;
      this.mesajeResultado = "¡Felicidades, ganaste!";
      return;
    }
  }

  
}
