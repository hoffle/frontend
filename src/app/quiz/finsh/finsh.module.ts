import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinshPageRoutingModule } from './finsh-routing.module';

import { FinshPage } from './finsh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinshPageRoutingModule
  ],
  declarations: [FinshPage]
})
export class FinshPageModule {}
