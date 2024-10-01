import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AhorcadoService {

  constructor() { }

  
  palabras: string[] = ['LEON', 'TIGRE', 'DELFIN', 'CANGURO', 'GATO', 'OVEJA', 'PAVO', 'PATO', 'CISNE', 'MURCIELAGO', 'BUFALO', 'HORMIGA', 'TIBURON', 'MEDUSA', 'RIO', 'OCEANO', 'LAGO', 'BOSQUE', 'ISLA', 'VOLCAN', 'CUEVA', 'PIEDRA', 'ROCA', 'VIENTO', 'FUEGO', 'HIELO', 'GRANIZO', 'PIZZA', 'PAN', 'QUESO', 'HUEVO', 'CARNE', 'PESCADO', 'UVA', 'FRESA', 'MANGO', 'PIÑA', 'LIMON', 'MELON', 'TOMATE', 'LECHUGA'];
  letras: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  
  obtenerPalabra(): string {
    const indice = Math.floor(Math.random() * this.palabras.length) //creo un indice random en base a la cantidad de palabras que hay.
    const palabra = this.palabras[indice];  //saco una palabra ubicada en el indice random que calcule arriba
    this.palabras.splice(indice, 1); //saco la palabra del array asi no se repite
    return palabra;
  }
}
