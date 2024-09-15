import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private firestore: Firestore, private auth: Auth) { }

  logger() {
    let col = collection(this.firestore, 'logins');
    addDoc(col, { fecha: new Date(), "user": this.auth.currentUser?.email });
  }
}
