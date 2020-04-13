import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodayInGDHistComponent } from './today-in-gd-hist/today-in-gd-hist.component';
import { TourYearModule } from './tour-year/tour-year.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodayInGDHistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TourYearModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
