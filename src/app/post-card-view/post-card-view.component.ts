import { Component } from '@angular/core';
import { ICardModel } from '../Models/CardModel';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { PostCardToAPIService } from '../post-card-to-api.service';
import { NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-post-card-view',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
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

  errorMessage!: string

  OnSubmit()
  {
    const cardData: ICardModel = this.newForm.value;
    console.log(cardData);
    this.htmlData.AddCard(cardData).subscribe({
      next: (response) => {console.log("Post Accepted", response)},
      error: (err) => {console.log("Error on Post", err)},
      complete: () => console.info("Post Completed")
    })
    console.log("Hit!")
  }

}
