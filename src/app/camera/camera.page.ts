import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Storage } from '@ionic/storage-angular';

import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  imports: [IonicModule],
})
export class CameraPage {
  constructor(private camera: Camera, private storage: Storage) { }
  // Camera options configuration
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  };

  
  takePicture() {
    this.camera.getPicture(this.options).then(
      (imageData) => {
        this.storage.create()
          .then(() => {
            this.storage.set("photos", imageData);
            console.log("photo");
          })
          .catch();
      },
      (err) => {
        // Handle error
        console.log('Camera issue: ' + err);
      }
    );
  }
}
/*
  Note:
  To use the camera functionality, you must run this code on an Android simulator or a real Android device.
*/