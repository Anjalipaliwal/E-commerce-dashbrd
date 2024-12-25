import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { DashboardECommerceComponent } from './dashboard/dashboard-e-commerce/dashboard-e-commerce.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardECommerceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
