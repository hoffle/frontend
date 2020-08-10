import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerOfflinePage } from './server-offline.page';

const routes: Routes = [
  {
    path: '',
    component: ServerOfflinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServerOfflinePageRoutingModule {}
