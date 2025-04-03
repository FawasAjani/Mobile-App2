import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemindersListPage } from './reminders-list.page';
// Define the routes for this module
const routes: Routes = [
  {
    path: '',// This specifies the empty path
    component: RemindersListPage// The component to display when the route is matched 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemindersListPageRoutingModule {}
