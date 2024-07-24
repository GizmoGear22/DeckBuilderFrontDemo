import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICardModel } from './Models/CardModel';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostCardToAPIService {

  constructor(private http: HttpClient) { }

  url1: string = 'https://deckbuildapi.azurewebsites.net/api/AvailableCardsAPI/PostNewCard';
  url2: string = 'https://localhost:44351/api/AvailableCardsAPI/PostNewCard'

  AddCard(card: ICardModel) : Observable<ICardModel>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<ICardModel>(this.url2, card, httpOptions).pipe(tap(
      response => {console.log("Accepted", response)}),
      catchError(error => {
        console.error("Invalid", error);
        return throwError(error);
      })
    )
  }
}
