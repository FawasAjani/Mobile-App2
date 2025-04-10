import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RemindersListPageRoutingModule } from './reminders-list-routing.module';
import { RemindersListPage } from './reminders-list.page';

@NgModule({
  imports: [
 // Include CommonModul
    CommonModule,
    // Include FormsModule to handle form functionalities
    FormsModule,
    IonicModule,// Include IonicModule
    RemindersListPageRoutingModule,
    RemindersListPage // Add RemindersListPage here
  ],
  declarations: [] // Remove RemindersListPage from here
})
 // Define the module for RemindersListPage
export class RemindersListPageModule {}