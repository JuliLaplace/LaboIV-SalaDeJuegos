import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {

  public loginsCollection:any[] = [];
  public user:string = "";


    constructor(private firestore: Firestore){

    }

  
    GetData(){
      let col = collection(this.firestore, 'logins');
      const obtenerQuery = query(col, orderBy('fecha', 'desc')); //ordeno los registros por fecha
      const observable = collectionData(obtenerQuery);
      observable.subscribe((respuesta:any) => {
        this.loginsCollection = respuesta;
      })

    }
}
