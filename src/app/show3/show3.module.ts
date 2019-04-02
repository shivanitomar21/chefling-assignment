import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Show3RoutingModule } from './show3.routers';
import { Show3 } from './show3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Show3RoutingModule
  ],
  declarations: [Show3]
})
export class Show3Module { }
