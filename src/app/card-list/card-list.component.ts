import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CardDataService } from '../card-data.service';
import { ICardModel } from '../Models/CardModel';
import { OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common'
import { Router } from '@angular/router';
import { CardViewComponent } from '../card-view/card-view.component';
import { GetCardsByTypeService } from '../get-cards-by-type.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgFor, CommonModule, CardViewComponent, FormsModule, HttpClientModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent implements OnInit {
  constructor(private htmlData: CardDataService, private cdr: ChangeDetectorRef, private getHtmlData: GetCardsByTypeService)
  {}

  cardList: ICardModel[] = [];
  selectedType!: string;

  ngOnInit()
  {
    this.htmlData.GetAllCardData().subscribe(data => {
      console.log(data)
      this.cardList = data;
    })
  }

  @ViewChild(CardViewComponent) cardView!: CardViewComponent; 

  selectedCard: any;
  cardId: any;

  ViewCard(card: ICardModel)
  {
    this.selectedCard = card
    this.cardId = card.id;
    this.cdr.detectChanges();
    this.cardView.ClickToView();
  }

  GetCardTypeSort(cardType: string)
  {
    if (cardType == "All")
    {
      this.htmlData.GetAllCardData().subscribe(data => this.cardList = data)
    } else {
      this.getHtmlData.CardByType(cardType).subscribe(data => {
        console.log(data);
        this.cardList = data;
      })
    }

  }

  ChangeBackgroundColor(card: ICardModel)
  {
    switch(card.typeString)
    {
      case "Machine":
        return 'backgroundColor: goldenrod'
      case "Pyro":
        return 'backgroundColor: orangered'
      case "Alchemy":
        return 'backgroundColor: silver'
      case "Tesla":
        return 'backgroundColor: dodgerblue'
      case "Bio":
        return 'backgroundColor: limegreen'
      default:
        return null;
    }
  }

}
