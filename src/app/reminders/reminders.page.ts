import { Component, OnInit } from '@angular/core';
import { RemindersService } from '../Services/reminders.service';
import { ToastController } from '@ionic/angular';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.page.html',
  styleUrls: ['./reminders.page.scss'],
  imports: [IonicModule, FormsModule, RouterModule, DatePipe],
})
export class RemindersPage {

  constructor(private toastController: ToastController, private reminderService: RemindersService) { }

  //Initialized variables
  private reminder: { title: string, content: string, index: number }[] = [];

  today: number = Date.now();


  //Saves reminder and sends to reminder service adn includes validation
  async saveReminder(value: { title: string, content: string, index: number }) {

    if (value.content && value.title != null) {

      this.reminderService.saveReminder(value);

      console.log("SAVED REMINDER " + value.title);
      console.log("SAVED REMINDER " + value.content);

      const toast = await this.toastController.create({
        color: 'dark',
        message: 'Your Reminder has been saved.',
        duration: 2000
      });
      toast.present();

    } else {
      //Validation
      const toast = await this.toastController.create({
        color: 'dark',
        message: 'Please enter your Reminder',
        duration: 2000
      });
      toast.present();
    }

  }

}
