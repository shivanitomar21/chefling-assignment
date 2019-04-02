import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Show2 } from './show2.component';

const routes: Routes = [
  {
    path: 'show2',
    component: Show2,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Show2RoutingModule { }
