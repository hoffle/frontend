import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WartungPageRoutingModule } from './wartung-routing.module';

import { WartungPage } from './wartung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WartungPageRoutingModule
  ],
  declarations: [WartungPage]
})
export class WartungPageModule {}
