import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodayInGDHistComponent } from './today-in-gd-hist/today-in-gd-hist.component';
import { ShowComponent } from './tour-year/show/show.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'TIGDH',
    component: TodayInGDHistComponent,
    children: [
      { path: ':eventDate', component: ShowComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
