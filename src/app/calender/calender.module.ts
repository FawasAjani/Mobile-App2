import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
// Import routing module for CalenderPage
import { CalenderPageRoutingModule } from './calender-routing.module';


@NgModule({
  imports: [
    CommonModule, // Provides common directives and pipes
    FormsModule,// Enables form functionalities
    IonicModule,// Provides Ionic UI components
    CalenderPageRoutingModule//Handles routing for this module
  ],
  declarations: [] // Remove CalenderPage from here
})
export class CalenderPageModule {}// Defines and exports the module for CalenderPage
