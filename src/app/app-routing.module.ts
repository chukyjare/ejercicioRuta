import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tab',
    pathMatch: 'full'
  },
  {
    path: 'car',
    loadChildren: () => import('./page/car/car.module').then( m => m.CarPageModule)
  },
  {
    path: 'walk',
    loadChildren: () => import('./page/walk/walk.module').then( m => m.WalkPageModule)
  },
  {
    path: 'airplane',
    loadChildren: () => import('./page/airplane/airplane.module').then( m => m.AirplanePageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./page/tab/tab.module').then( m => m.TabPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
