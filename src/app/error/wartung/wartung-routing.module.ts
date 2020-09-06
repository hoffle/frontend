import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WartungPage } from './wartung.page';

const routes: Routes = [
  {
    path: '',
    component: WartungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WartungPageRoutingModule {}
