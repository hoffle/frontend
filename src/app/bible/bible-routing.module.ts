import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiblePage } from './bible.page';

const routes: Routes = [
  {
    path: '',
    component: BiblePage
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiblePageRoutingModule {}
