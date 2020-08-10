import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServerOfflinePageRoutingModule } from './server-offline-routing.module';

import { ServerOfflinePage } from './server-offline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServerOfflinePageRoutingModule
  ],
  declarations: [ServerOfflinePage]
})
export class ServerOfflinePageModule {}
