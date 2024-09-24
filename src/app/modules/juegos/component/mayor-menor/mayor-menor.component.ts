import { Component, Input } from '@angular/core';
import { MazoCartasService } from '../../../../servicios/mazo-cartas.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrl: './mayor-menor.component.css'
})
export class MayorMenorComponent {

  mazoId!: string;
  cartaActual: any = null;
  siguienteCarta: any = null;
  cartasEnMazo!: number;

  resultado: boolean = false;;
  mesajeResultado!: string;
  vidasUsuario: number = 3;
  vidas: boolean[] = [true, true, true]; //las uso para mostrar los corazones rosas (true) o negros (false)
  juegoFinalizado: boolean = false;

  score: number = 0;

  constructor(private servicioMazo: MazoCartasService) {
  }

  ngOnInit(): void {
    this.servicioMazo.getMazo().subscribe(respuesta => {
      this.mazoId = respuesta.deck_id; // asi me devuelve la api el id del mazo y lo guardo en mi componente.
      console.log(this.mazoId);
      this.iniciarJuego();
    });
  }


  iniciarJuego() {
    if (!this.mazoId) { //me fijo que hay mazo disponible
      console.log("no hay mazo disponible");
    }
    this.servicioMazo.getCarta(this.mazoId).subscribe(response => {
      this.cartaActual = response.cards[0];  // saco la primer carta para mostrar
    });
    this.servicioMazo.getCarta(this.mazoId).subscribe(response => {
      this.siguienteCarta = response.cards[0];  // saco la carta para fijarme si acierta o no (pero no la muestro)
      this.cartasEnMazo = response.remaining;
    });

  }

  adivinar(opcion: string) {

    // if (this.juegoFinalizado) {
    //   return; //aca voy a tener que mostrar que perdió
    // }

    const valorActual = this.obtenerValorCartaEnNumero(this.cartaActual.value);
    const valorSiguiente = this.obtenerValorCartaEnNumero(this.siguienteCarta.value);

    let usuarioAdivina = false; //seteo en false mi condicion antes de comparar.
    let esEmpate = false; //para mostrar el empate.

    if (opcion == 'mayor' && valorSiguiente > valorActual) {
      usuarioAdivina = true;
    } else if (opcion === 'menor' && valorSiguiente < valorActual) {
      usuarioAdivina = true;
    } else if (valorActual === valorSiguiente) {
      esEmpate = true;
    }

    this.resultado = true;
    // this.mesajeResultado = usuarioAdivina ? '¡Correcto!' : '¡Fallaste!';

    if (esEmpate) {
      this.mesajeResultado = '¡Empate!';
    } else if (usuarioAdivina) {
      this.mesajeResultado = '¡Correcto!';
      this.score += 1;
    } else {
      this.mesajeResultado = '¡Fallaste!';
      this.perderVida();
    }



    if (this.vidasUsuario === 0) {

      this.juegoFinalizado = true;
      this.mesajeResultado = '¡Te quedaste sin vidas!';
      return;
    } else {

      this.cartaActual = this.siguienteCarta;
      this.servicioMazo.getCarta(this.mazoId).subscribe(response => {
        this.siguienteCarta = response.cards[0];
        this.cartasEnMazo = response.remaining;
      });
    }
  }

  obtenerValorCartaEnNumero(valor: string): number {
    switch (valor) {
      case 'ACE':
        return 14;
      case 'KING':
        return 13;
      case 'QUEEN':
        return 12;
      case 'JACK':
        return 11;
      default:
        return +valor;  //el + adelante me lo pasea a numero, y los valores que quedan son numeros.
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


    this.servicioMazo.getMazo().subscribe(respuesta => {
      this.mazoId = respuesta.deck_id;
      this.iniciarJuego();
    });
  }

}
