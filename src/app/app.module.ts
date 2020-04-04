import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TourYearComponent } from './tour-year/tour-year.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { TodayInGDHistComponent } from './today-in-gd-hist/today-in-gd-hist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourYearComponent,
    SidebarMenuComponent,
    TodayInGDHistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
