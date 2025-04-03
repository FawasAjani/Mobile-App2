import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemindersPageRoutingModule } from './reminders-routing.module';

import { RemindersPage } from './reminders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemindersPageRoutingModule,
    RemindersPage // Add RemindersPage here
  ],
  declarations: []
})
export class RemindersPageModule {}
