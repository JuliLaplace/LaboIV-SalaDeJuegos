import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MazoCartasService {

  constructor(private http: HttpClient) { }


  getMazo(){
    return this.http.get<any>('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');  //tengo el id del deck
  }

  getCarta(deckId: string): Observable<any> {
    return this.http.get<any>(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`); //aca saco una carta del deck con el id que agarre
  }


}
