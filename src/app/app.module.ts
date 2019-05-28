import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Show1RoutingModule } from './show1/show1.routers';
import { Show1Module } from './show1/show1.module';
import { Show2RoutingModule } from './show2/show2.routers';
import { Show2Module } from './show2/show2.module';
import { Show3RoutingModule } from './show3/show3.routers';
import { Show3Module } from './show3/show3.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Show1RoutingModule,
    Show1Module,
    Show2RoutingModule,
    Show2Module,
    Show3RoutingModule,
    Show3Module,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
