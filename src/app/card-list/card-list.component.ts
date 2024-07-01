import { Component, ViewChild } from '@angular/core';
import { CardDataService } from '../card-data.service';
import { ICardModel } from '../Models/CardModel';
import { OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common'
import { Router } from '@angular/router';
import { CardViewComponent } from '../card-view/card-view.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgFor, CommonModule, CardViewComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent implements OnInit {
  constructor(private htmlData: CardDataService, private router: Router)
  {}

  cardList: ICardModel[] = [];

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
    console.log(this.cardView)
    this.cardView.ClickToView();
  }

}
