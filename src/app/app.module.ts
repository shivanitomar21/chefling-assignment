import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ExamModule } from './exam/exam.module';
// import { SearchPlanetRoutingModule } from './searchplanet/searchplanet.routers';
// import { SearchPlanetModule } from './searchplanet/searchplanet.module';
import { Show1RoutingModule } from './show1/show1.routers';
import { Show1Module } from './show1/show1.module';
import { Show2RoutingModule } from './show2/show2.routers';
import { Show2Module } from './show2/show2.module';
// import { FilterPipe } from '../show2';
import { Show3RoutingModule } from './show3/show3.routers';
import { Show3Module } from './show3/show3.module';
// import { ProductRoutingModule } from './product/product-routing.module';
// import { ProductModule } from './product/product.module';
// import { NotFoundComponent } from './not-found/not-found.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
// import { NotFoundService } from './services/not-found.service';

@NgModule({
  declarations: [
    AppComponent,
    // NotFoundComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // ProductRoutingModule,
    // ExamModule,
    // ProductModule,
    // the root routing module must on the end of this array
    AppRoutingModule,
    // SearchPlanetRoutingModule,
    // SearchPlanetModule,
    Show1RoutingModule,
    Show1Module,
    Show2RoutingModule,
    Show2Module,
    Show3RoutingModule,
    Show3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
