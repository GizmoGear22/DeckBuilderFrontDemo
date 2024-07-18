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
  htmlString: string = "https://deckbuildapi.azurewebsites.net/api/AvailableCardsAPI/GetAllCards";

  GetAllCardData() : Observable<ICardModel[]>
  {
    this.cardData = this.http.get<ICardModel[]>(this.htmlString)
    return this.cardData;
  }
}
