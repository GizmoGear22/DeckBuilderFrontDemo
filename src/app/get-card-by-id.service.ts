import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICardModel } from './Models/CardModel';

@Injectable({
  providedIn: 'root'
})
export class GetCardByIdService {

  constructor(private http: HttpClient) { }

  cardData!: Observable<ICardModel>;
  htmlString: string = "https://localhost:44382/api/AvailableCardsAPI/GetCardById";

  GetCardData(id: number): Observable<ICardModel>
  {
    this.cardData = this.http.get<ICardModel>(this.htmlString)
    return this.cardData;
  }
}
