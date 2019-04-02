import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Show1 } from './show1.component';

const routes: Routes = [
  {
    path: 'show1',
    component: Show1,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Show1RoutingModule { }
