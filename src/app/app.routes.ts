import { Routes } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';
import { CardListComponent } from './card-list/card-list.component';

export const routes: Routes = [
    {path: 'card-view/:id', component: CardViewComponent},
    {path: 'card-list', component: CardListComponent}

];
