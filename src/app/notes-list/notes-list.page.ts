import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IonHeader, IonCard, IonToolbar, IonButtons, IonBackButton, IonTitle, IonButton, IonPopover, IonContent, IonCardSubtitle, IonCardContent, IonTextarea, IonCardHeader, IonCardTitle } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.page.html',
  styleUrls: ['./notes-list.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule, RouterModule], 
})
export class NotesListPage {

  constructor(private storage: Storage, public alertController: AlertController, private toastController: ToastController) { }


  //Initialize variables
  notes: { title: string, content: string, index: number }[] = [];

  noteCount: number = 0;
noteNumber: number = 0;

  //Entering page it will get all notes
  ionViewWillEnter() {
    this.storage.create()
      .then(() => {
        this.storage.get('notes')
          .then((data) => {
            this.notes = data;
          })
          .catch();
      })
      .catch();

    this.noteCount = Object.keys(this.notes).length;
  }


  async presentAlertConfirm() {
    this.noteCount = Object.keys(this.notes).length;

    //console.log("LENGTH " + this.noteCount);

    if (this.noteNumber < this.noteCount && this.noteNumber > -1) {

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Are you sure you want to delete your note',
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
              console.log('Confirm Okay' + this.noteNumber);

              this.notes.splice(this.noteNumber, 1);

              this.storage.create()
                .then(() => {
                  this.storage.set("notes", this.notes);
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
        message: 'Please enter a valid Note Number.',
        duration: 2000
      });
      toast.present();
    }
  }
}
