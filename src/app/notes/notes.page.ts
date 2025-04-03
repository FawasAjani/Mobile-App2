import { Component, OnInit } from '@angular/core';
import { NoteService } from '../Services/note.service';
import { ToastController, IonicModule } from '@ionic/angular'; // Added IonicModule import
import { FormsModule } from '@angular/forms'; // Added FormsModule import

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  imports: [IonicModule, FormsModule], // Added IonicModule and FormsModule to the imports array
})
export class NotesPage {

  constructor(private noteService: NoteService, private toastController: ToastController) {
  }

  //Saves note and sends to Note service adn includes validation
  async saveNote(value: { title: string, content: string, index: number }) {

    if (value.content && value.title != null) {

      this.noteService.saveNote(value);

      console.log("SAVED NOTE " + value.title);
      console.log("SAVED NOTE " + value.content);

      const toast = await this.toastController.create({
        color: 'dark',
        message: 'Your Note has been saved.',
        duration: 2000
      });
      toast.present();

    } else {
      //Validation
      const toast = await this.toastController.create({
        color: 'dark',
        message: 'Please enter your Title and Note into the Input box above',
        duration: 2000
      });
      toast.present();
    }

  }

}