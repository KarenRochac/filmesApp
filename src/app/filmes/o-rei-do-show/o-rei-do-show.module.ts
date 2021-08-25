import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OReiDoShowPageRoutingModule } from './o-rei-do-show-routing.module';

import { OReiDoShowPage } from './o-rei-do-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OReiDoShowPageRoutingModule
  ],
  declarations: [OReiDoShowPage]
})
export class OReiDoShowPageModule {}
