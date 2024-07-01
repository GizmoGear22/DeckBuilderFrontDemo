import { Routes } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';
import { CardListComponent } from './card-list/card-list.component';
import { PostCardViewComponent } from './post-card-view/post-card-view.component';

export const routes: Routes = [
    {path: '', redirectTo: 'card-list', pathMatch: 'full'},
    {path: 'card-view/:id', component: CardViewComponent},
    {path: 'card-list', component: CardListComponent},
    {path: 'post-card', component: PostCardViewComponent}

];
