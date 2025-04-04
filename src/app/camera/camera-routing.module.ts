import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CameraPage } from './camera.page';
// Define the routes for this module
const routes: Routes = [
  {
    path: '',//This sets the default route for this module
    component: CameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], // Export RouterModule
})
export class CameraPageRoutingModule {}
