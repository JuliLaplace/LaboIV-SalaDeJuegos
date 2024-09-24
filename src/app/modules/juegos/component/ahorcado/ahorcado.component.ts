import { Component } from '@angular/core';
import { AhorcadoService } from '../../../../servicios/ahorcado.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {

  vidas:number=6;
  juegoFinalizado: boolean = false;
  palabraParaAdivinar!: string;
  letrasPorAdivinar: string[] = []; //array con las letras de la palabra para adivinar
  letrasYaUsadas : string[]=[];
  letrasAcertadas: string [] = [];

  score : number = 0;

  constructor( public ahorcado: AhorcadoService) {}

  ngOnInit(): void {
    this.iniciarJuego();
    console.log(this.palabraParaAdivinar)
  }

  iniciarJuego(){
    this.palabraParaAdivinar = this.ahorcado.obtenerPalabra();
    this.letrasPorAdivinar = this.obtenerLetrasPalabra();
  }


 

  obtenerLetrasPalabra(): string[] {
    return this.palabraParaAdivinar.split('');
  }

  letraSeleccionadaBotonera(letra: string) {

    if(this.vidas>0){
      this.letrasYaUsadas.push(letra);
      if(this.palabraParaAdivinar.includes(letra)){
        console.log("bien");
        this.letrasAcertadas.push(letra);
      }else{
        console.log("mal");
        this.perderVidas();
      }
    }
  }

  mostrarLetra(letra : string){
    return this.letrasAcertadas.includes(letra) ? letra : '_';
  }
 
  letraUsada(letra:string):boolean{
    return this.letrasYaUsadas.includes(letra);
  }

  perderVidas(){
    this.vidas = this.vidas-1;
  }

  reiniciarVidas(){
    this.vidas = 6;
  }
}
