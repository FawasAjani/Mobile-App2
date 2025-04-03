import { Component } from '@angular/core';
// Handles local storage in Ionic
import { Storage } from '@ionic/storage-angular';
// Used for displaying alerts
import { AlertController } from '@ionic/angular';
// Used for displaying toasts (small notifications)
import { ToastController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-reminders-list',
  templateUrl: './reminders-list.page.html',
  styleUrls: ['./reminders-list.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule, RouterModule],
  
})
export class RemindersListPage {

  //initialize Variables
  constructor(private storage: Storage, public alertController: AlertController, private toastController: ToastController) { }
// Array to store reminders, each containing a title, content, and index
  reminders: { title: string, content: string, index: number }[] = [];

  reminderCount: number = 0;
  reminderNumber: number = 0;

  ionViewWillEnter() {
    this.storage.create()
      .then(() => {
        this.storage.get('reminders')
          .then((data) => {
            this.reminders = data;
          })
          .catch();
      })
      .catch();

    //Gets counter of reminders
    this.reminderCount = Object.keys(this.reminders).length;
  }

  //Checks if there is a valid note to delete

  async presentAlertConfirm() {
    this.reminderCount = Object.keys(this.reminders).length;

    if (this.reminderNumber < this.reminderCount && this.reminderCount > -1) {

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Are you sure you want to delete your reminder',
        message: 'You will lose your note forever!!!',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            id: 'cancel-button',
            handler: (blah) => {
              console.log('Confirm Cancelled Do nothing');
            }
          }, {
            text: 'Yes',
            id: 'confirm-button',
            handler: () => {
              console.log('Confirm Okay' + this.reminderNumber);

              this.reminders.splice(this.reminderNumber, 1);

              this.storage.create()
                .then(() => {
                  this.storage.set("reminders", this.reminders);
                })
                .catch();
            }
          }
        ]
      });
      await alert.present();

    } else {
      const toast = await this.toastController.create({
        color: 'dark',
        message: 'Please enter a valid reminder Number.',
        duration: 2000
      });
      toast.present();
    }

  }

}
