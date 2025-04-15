import { Component } from '@angular/core';//import componet
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';//imprt camera
import { Storage } from '@ionic/storage-angular';//import storage
import { IonicModule } from '@ionic/angular';//import ionic module

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class CameraPage {
  imageDataUrl: string | undefined;

  constructor(private storage: Storage) {}

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt // allows Camera or Gallery
      });

      this.imageDataUrl = image.dataUrl;

      await this.storage.create();
      await this.storage.set('photo', image.dataUrl);
      console.log('Photo saved to storage!');
    } catch (error) {
      console.log('Camera error:', error);
    }
  }
}
