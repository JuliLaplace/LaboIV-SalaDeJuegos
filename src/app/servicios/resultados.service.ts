import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, limit, orderBy, query, where } from '@angular/fire/firestore';
import { SesionService } from './sesion.service';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  public coleccionResultados: any[] = [];
  constructor(private firestore: Firestore, public sesion: SesionService) { 

  }
  crearRegistro(score:number, juego: string) {
    let col = collection(this.firestore, 'resultados');
    addDoc(col, { fecha: new Date(), "user": this.sesion.getUsuario(), score: score, juego: juego });
  }

  obtenerDatos(juegoSeleccionado:string) {
    let col = collection(this.firestore, 'resultados');
    const obtenerQuery = query(
      col,
      where('juego', '==', juegoSeleccionado),
      orderBy('score', 'desc'),
      limit(10)
    ); //ordeno los registros por score más alto y los filtro por juego seleccionado

    const observable = collectionData(obtenerQuery);
    observable.subscribe((respuesta: any) => {
      this.coleccionResultados = respuesta;
    })
  }
}
