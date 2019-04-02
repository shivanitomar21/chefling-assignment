import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Show1RoutingModule } from './show1.routers';
import { Show1 } from './show1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Show1RoutingModule
  ],
  declarations: [Show1]
})
export class Show1Module { }
