import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Show3 } from './show3.component';

const routes: Routes = [
  {
    path: 'show3',
    component: Show3,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Show3RoutingModule { }
