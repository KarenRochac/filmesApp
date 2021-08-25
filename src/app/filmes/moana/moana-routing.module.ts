import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoanaPage } from './moana.page';

const routes: Routes = [
  {
    path: '',
    component: MoanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoanaPageRoutingModule {}
