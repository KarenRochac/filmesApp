import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'soul',
    loadChildren: () => import('./filmes/soul/soul.module').then( m => m.SoulPageModule)
  },
  {
    path: 'luca',
    loadChildren: () => import('./filmes/luca/luca.module').then( m => m.LucaPageModule)
  },
  {
    path: 'o-rei-do-show',
    loadChildren: () => import('./filmes/o-rei-do-show/o-rei-do-show.module').then( m => m.OReiDoShowPageModule)
  },
  {
    path: 'moana',
    loadChildren: () => import('./filmes/moana/moana.module').then( m => m.MoanaPageModule)
  },
  {
    path: 'produrando-dory',
    loadChildren: () => import('./filmes/produrando-dory/produrando-dory.module').then( m => m.ProdurandoDoryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
