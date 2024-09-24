import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chatCollection : any[] = [];

  constructor( private firestore: Firestore) {
     this.obtenerMensajes();
   }


    crearMensajes(usuario: string, mensaje: string) {
      let col = collection(this.firestore, 'chat');
      addDoc(col, { fecha: new Date(), "user": usuario, mensaje: mensaje  });
    }
    

    
    obtenerMensajes(): any {
      let col = collection(this.firestore, 'chat');
      const obtenerQuery = query(col, orderBy('fecha', 'asc')); //ordeno los registros por fecha reciente
      const observable = collectionData(obtenerQuery);

      observable.subscribe((respuesta: any) => {
        this.chatCollection = respuesta;
      });
  }
}
