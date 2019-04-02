import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Show2RoutingModule } from './show2.routers';
import { Show2 } from './show2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Show2RoutingModule
  ],
  declarations: [Show2]
})
export class Show2Module { }
