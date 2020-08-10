import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinshPage } from './finsh.page';

const routes: Routes = [
  {
    path: '',
    component: FinshPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinshPageRoutingModule {}
