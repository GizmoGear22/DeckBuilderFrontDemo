import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICardModel } from '../Models/CardModel';
import { NgIf } from '@angular/common';
import { GetCardByIdService } from '../get-card-by-id.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css'
})
export class CardViewComponent {
  
  constructor(private router: ActivatedRoute, private cardIdService: GetCardByIdService)
  {}
  @Input() cardID: any

  cardData!: any

  ClickToView()
  {
    if(this.cardID)
      {
        this.cardIdService.GetCardData(this.cardID).subscribe(data => this.cardData = data);
        console.log(this.cardData)
      }
  } 

/*
  ngOnInit() {

    this.cardData = this.cardIdService.GetCardData(this.cardID).subscribe(data => console.log(data));
    console.log(this.cardData);
    /*
    const id = this.router.snapshot.paramMap.get('id');
    if (id)
      {
        console.log(id)
        let idNumber = Number(id)
        this.cardData = this.cardIdService.GetCardData(idNumber).subscribe(data => console.log(data));
        
      }
        */
}



