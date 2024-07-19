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
  

  GetCardData(id: number): Observable<ICardModel>
  {
    const htmlString1: string = `https://deckbuildapi.azurewebsites.net/api/AvailableCardsAPI/GetCardById?id=${id}`
    const htmlString2: string = `https://localhost:44351/api/AvailableCardsAPI/GetCardById?id=${id}`
    this.cardData = this.http.get<ICardModel>(htmlString2)
    console.log(this.cardData);
    return this.cardData;
  }

}
