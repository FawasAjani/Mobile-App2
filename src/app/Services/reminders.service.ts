//importing modules from angular and ionic
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  // Declaring a private array to store reminders.
  private reminder: { title: string, content: string, index: number }[] = [];
  //injects the Ionic Storage service into the service
  constructor(private storage: Storage) { }

   //Method to save a reminder and push it into the reminders array
  saveReminder(reminders: { title: string, content: string, index: number }) {
      // Push 
    this.reminder.push(reminders);

    this.storage.create()
      .then(() => {
        this.storage.set("reminders", this.reminder);
      })
      .catch();
  }
}
