import { WalkPageModule } from './../walk/walk.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path:'walk',
        loadChildren: () => import('./../../page/walk/walk.module').then( m => m.WalkPageModule)
      },
      {
        path:'car',
        loadChildren: () => import('./../../page/car/car.module').then( m => m.CarPageModule)
      },
      {
        path:'airplane',
        loadChildren: () => import('./../../page/airplane/airplane.module').then( m => m.AirplanePageModule)
      }
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
