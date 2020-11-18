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
        loadChildren: './../../page/walk/walk.module#WalkPageModule'
      },
      {
        path:'car',
        loadChildren: './../../page/car/car.module#CarPageModule'
      },
      {
        path:'airplane',
        loadChildren: './../../page/airplane/airplane.module#AirplanePageModule'
      }
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
