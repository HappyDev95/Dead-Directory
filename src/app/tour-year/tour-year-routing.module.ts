import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourYearComponent } from './tour-year.component';
import { ShowComponent } from './show/show.component';

const tourYearRoutes: Routes = [
  {
    path: 'tourYear/:year',
    component: TourYearComponent,
    children: [
      { path: ':eventDate', component: ShowComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(tourYearRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TourYearRoutingModule { }
