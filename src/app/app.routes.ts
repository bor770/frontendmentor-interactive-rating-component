import { Routes } from '@angular/router';

import { RatingComponent } from './rating/rating.component';
import { ThankComponent } from './thank/thank.component';

export const routes: Routes = [
  { component: RatingComponent, path: `` },
  {
    loadComponent: () =>
      import(`./thank/thank.component`).then((m) => m.ThankComponent),
    path: `:selected`,
  },
];
