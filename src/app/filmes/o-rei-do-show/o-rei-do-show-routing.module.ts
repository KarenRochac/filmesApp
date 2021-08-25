import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OReiDoShowPage } from './o-rei-do-show.page';

const routes: Routes = [
  {
    path: '',
    component: OReiDoShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OReiDoShowPageRoutingModule {}
