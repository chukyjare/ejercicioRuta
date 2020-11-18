import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  //   children: [
  //     {
  //       path:'walk',
  //       loadChildren: './walk/walk.module#WalkPageModule'
  //     },
  //     {
  //       path:'car',
  //       loadChildren: './car/car.module#CarPageModule'
  //     },
  //     {
  //       path:'airplane',
  //       loadChildren: './airplane/airplane.module#AirplanePageModule'
  //     }
  //   ]
  // },

  
  // {
  //   path: 'walk',
  //   loadChildren: () => import('./walk/walk.module').then( m => m.WalkPageModule)
  // },
  // {
  //   path: 'car',
  //   loadChildren: () => import('./car/car.module').then( m => m.CarPageModule)
  // },
  // {
  //   path: 'airplane',
  //   loadChildren: () => import('./airplane/airplane.module').then( m => m.AirplanePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
