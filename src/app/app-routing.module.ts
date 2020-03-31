import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TourYearComponent } from './tour-year/tour-year.component';

const routes: Routes = [
  { path: '',               component: HomeComponent },
  { path: 'tourYear/:year', component: TourYearComponent },
  //tourYear/:year is a token for a route paramter (ex: tourYear/1965)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
