import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsPage } from './questions.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionsPage
  },
  {
    path: 'geo',
    loadChildren: () => import('./geo/geo.module').then( m => m.GeoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsPageRoutingModule {}
