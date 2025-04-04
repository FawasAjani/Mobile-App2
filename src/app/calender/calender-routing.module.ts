import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalenderPage } from './calender.page';
// Define the routes for this module
const routes: Routes = [
  {
    // This sets the default path for this module
    path: '',
    component: CalenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalenderPageRoutingModule {}
