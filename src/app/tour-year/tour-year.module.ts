import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourYearRoutingModule } from './tour-year-routing.module';

import { TourYearComponent } from './tour-year.component';
import { SidebarMenuComponent } from './../sidebar-menu/sidebar-menu.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    TourYearComponent,
    SidebarMenuComponent,
    ShowComponent,
  ],
  imports: [
    CommonModule,
    TourYearRoutingModule,
  ]
})

export class TourYearModule { }
