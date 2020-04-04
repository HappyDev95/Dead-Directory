import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TourYearComponent } from './tour-year/tour-year.component';
import { TodayInGDHistComponent } from './today-in-gd-hist/today-in-gd-hist.component';

const routes: Routes = [
  { path: '',               component: HomeComponent },
  //tourYear/:year is a token for a route paramter (ex: tourYear/1965)
  { path: 'tourYear/:year', component: TourYearComponent },
  { path: 'TIGDH', component: TodayInGDHistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
