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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
