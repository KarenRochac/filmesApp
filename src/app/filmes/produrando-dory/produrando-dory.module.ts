import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdurandoDoryPageRoutingModule } from './produrando-dory-routing.module';

import { ProdurandoDoryPage } from './produrando-dory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdurandoDoryPageRoutingModule
  ],
  declarations: [ProdurandoDoryPage]
})
export class ProdurandoDoryPageModule {}
