import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodayInGDHistComponent } from './today-in-gd-hist/today-in-gd-hist.component';
import { ShowComponent } from './tour-year/show/show.component';
import { ContactUsComponent } from './contact/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'TIGDH',
    component: TodayInGDHistComponent,
    children: [
      { path: ':eventDate', component: ShowComponent },
    ]
  },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
