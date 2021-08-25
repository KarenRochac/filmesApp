import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoanaPageRoutingModule } from './moana-routing.module';

import { MoanaPage } from './moana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoanaPageRoutingModule
  ],
  declarations: [MoanaPage]
})
export class MoanaPageModule {}
