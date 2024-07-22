import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICardModel } from '../Models/CardModel';
import { NgIf } from '@angular/common';
import { GetCardByIdService } from '../get-card-by-id.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [NgIf, HttpClientModule],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css'
})
export class CardViewComponent implements OnChanges {
  
  constructor(private cardIdService: GetCardByIdService)
  {}
  @Input() cardID: any

  cardData!: any

  backgroundData: any
  

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cardID'] && changes['cardID'].currentValue)
      {
        this.ClickToView();
      }
  }

  ClickToView()
  {
    if(this.cardID)
      {
        this.cardIdService.GetCardData(this.cardID).subscribe(data => this.cardData = data);
        console.log(this.cardData)
        this.backgroundData = document.getElementById("CardBase")
        if (this.backgroundData)
        {
          switch(this.cardData.type)
          {
            case "Machine":
              this.backgroundData.style.backgroundColor = "bronze"
              break;
            case "Pyro":
              this.backgroundData.style.backgroundColor = "red"
              break;
            case "Alchemy":
              this.backgroundData.style.backgroundColor = "black"
              break;
            case "Tesla":
              this.backgroundData.style.backgroundColor = "blue"
              break;
            case "Bio":
              this.backgroundData.style.backgroundColor = "green"
              break;
          }
        }

      }
  } 

  SortByType()
  {
    
  }
}



