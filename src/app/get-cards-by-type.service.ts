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
    const url: string = `https://localhost:44382/api/AvailableCardsAPI/GetAllCardByType?type=${type}`;
    this.dataArray = this.http.get<ICardModel[]>(url)
    return this.dataArray;
  }

}
