import { Component } from '@angular/core';
import { ICardModel } from '../Models/CardModel';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { PostCardToAPIService } from '../post-card-to-api.service';

@Component({
  selector: 'app-post-card-view',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-card-view.component.html',
  styleUrl: './post-card-view.component.css'
})
export class PostCardViewComponent implements OnInit {

  constructor(private htmlData: PostCardToAPIService, private builder: FormBuilder)
  {}

  newForm!: FormGroup;

  ngOnInit() {
    this.newForm = this.builder.group({
      id: [0],
      name: [''],
      cost: 0,
      attack: 0,
      defense: 0,
      inputType: ['']

    })
  }

  OnSubmit()
  {
    const cardData: ICardModel = this.newForm.value;
    this.htmlData.AddCard(cardData)
  }

}
