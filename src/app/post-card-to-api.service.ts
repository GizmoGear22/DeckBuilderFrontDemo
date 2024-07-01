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

  url: string = 'https://localhost:44382/api/AvailableCardsAPI/PostNewCard';


  AddCard(card: ICardModel) : Observable<ICardModel>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<ICardModel>(this.url, card, httpOptions).pipe(tap(
      response => {console.log("Accepted", response)}),
      catchError(error => {
        console.error("Invalid", error);
        return throwError(error);
      })
    )
  }
}
