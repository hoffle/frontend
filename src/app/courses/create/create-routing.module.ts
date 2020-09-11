import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePage } from './create.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePageRoutingModule {}
