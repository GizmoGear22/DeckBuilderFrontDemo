import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICardModel } from '../Models/CardModel';
import { NgIf } from '@angular/common';
import { GetCardByIdService } from '../get-card-by-id.service';


@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css'
})
export class CardViewComponent implements OnInit {
  
  constructor(private router: ActivatedRoute, private cardIdService: GetCardByIdService)
  {}

  cardData: any;

  ngOnInit() {

    const id = this.router.snapshot.paramMap.get('id');
    if (id)
      {
        let idNumber = Number(id)
        this.cardData = this.cardIdService.GetCardData(idNumber).subscribe(data => console.log(data));
      }
  }


}
