import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { SearchPlanet } from './searchplanet/searchplanet.component';
import { Show1 } from './show1/show1.component';
import { Show2 } from './show2/show2.component';
import { Show3 } from './show3/show3.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
// import 'hammerjs';
// import {
//   MatCheckboxModule,
// } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashBoardComponent,
    children: []
  },
  {
    path: 'show1',
    pathMatch: 'full',
    component: Show1,
  },
  {
    path: 'show2',
    pathMatch: 'full',
    component: Show2,
  },
  {
    path: 'show3',
    pathMatch: 'full',
    component: Show3,
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  //   pathMatch: 'full'
  // }
];

@NgModule({
    imports: [
      // MatCheckboxModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
