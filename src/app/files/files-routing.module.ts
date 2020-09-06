import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilesPage } from './files.page';

const routes: Routes = [
  {
    path: '',
    component: FilesPage
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
export class FilesPageRoutingModule {}
