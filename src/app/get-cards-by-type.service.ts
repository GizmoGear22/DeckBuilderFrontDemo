import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICardModel } from './Models/CardModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCardsByTypeService {

  constructor(private http: HttpClient) { }

  dataArray!: Observable<ICardModel[]>

  CardByType(type: string): Observable<ICardModel[]>
  {
    const url1: string = `https://deckbuildapi.azurewebsites.net/api/AvailableCardsAPI/GetAllCardByType?type=${type}`;
    const url2: string = `https://localhost:44351/api/AvailableCardsAPI/GetAllCardByType?type=${type}`
    this.dataArray = this.http.get<ICardModel[]>(url2)
    return this.dataArray;
  }

}
