import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodayInGDHistComponent } from './today-in-gd-hist/today-in-gd-hist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'TIGDH', component: TodayInGDHistComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
