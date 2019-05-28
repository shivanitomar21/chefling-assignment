import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Show1 } from './show1/show1.component';
import { Show2 } from './show2/show2.component';
import { Show3 } from './show3/show3.component';

const routes: Routes = [
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
];

@NgModule({
    imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
