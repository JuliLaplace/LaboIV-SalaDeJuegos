import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { SesionService } from './sesion.service';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  public coleccionEncuesta: any[] = [];
  constructor(private firestore: Firestore, private sesion : SesionService) { }


  crearRegistro(nombre:string, apellido:string, edad: number, telefono: number, mensaje: string, juegoFavorito: string, nivelSatisfaccion:number ) {
    let col = collection(this.firestore, 'resultados');
    addDoc(col, { fecha: new Date(), "user": this.sesion.getUsuario(), nombre: nombre, apellido:apellido, edad: edad, telefono: telefono, mensaje: mensaje, juegoFavorito: juegoFavorito, nivelSatisfaccion: nivelSatisfaccion });
  }

  obtenerDatos(juegoSeleccionado:string) {
    let col = collection(this.firestore, 'resultados');
    const obtenerQuery = query(
      col,
      orderBy('fecha', 'desc')
      // limit(10)
    ); //ordeno los registros por fecha

    const observable = collectionData(obtenerQuery);
    observable.subscribe((respuesta: any) => {
      this.coleccionEncuesta = respuesta;
    })
  }
}
