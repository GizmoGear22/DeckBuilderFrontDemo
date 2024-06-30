import { Component } from '@angular/core';
import { CardDataService } from '../card-data.service';
import { ICardModel } from '../Models/CardModel';
import { OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgFor, CommonModule],
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

  selectedCard: any;

  ViewCard(card: ICardModel)
  {
    this.selectedCard = card
    this.router.navigate(['card-view', card.id])
    //console.log(this.selectedCard)
  }

}
