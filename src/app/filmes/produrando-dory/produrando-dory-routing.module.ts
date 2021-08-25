import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdurandoDoryPage } from './produrando-dory.page';

const routes: Routes = [
  {
    path: '',
    component: ProdurandoDoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdurandoDoryPageRoutingModule {}
