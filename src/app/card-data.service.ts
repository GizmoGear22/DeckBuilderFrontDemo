import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICardModel } from './Models/CardModel';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor(private http: HttpClient) { }

  cardData!: Observable<ICardModel[]>
  htmlString1: string = "https://deckbuildapi.azurewebsites.net/api/AvailableCardsAPI/GetAllCards";
  htmlString2: string = "https://localhost:44351/api/AvailableCardsAPI/GetAllCards";

  GetAllCardData() : Observable<ICardModel[]>
  {
    this.cardData = this.http.get<ICardModel[]>(this.htmlString2)
    return this.cardData;
  }
}
