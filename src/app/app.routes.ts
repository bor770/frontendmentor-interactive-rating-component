import { Routes } from '@angular/router';

import { RatingComponent } from './rating/rating.component';
import { ThankComponent } from './thank/thank.component';

export const routes: Routes = [
  { component: RatingComponent, path: `` },
  { component: ThankComponent, path: `:selected` },
];
