import { Component } from '@angular/core';
import { WeatherService } from '../Services/weather.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, RouterModule, DatePipe, DecimalPipe, FormsModule, CommonModule],
})
export class HomePage {

  // Initialize variables
  weatherMain = {
    "temp": 0,
    "feels_like": 0,
    "temp_min": 0,
    "temp_max": 0,
    "pressure": 0,
    "humidity": 0,
    "sea_level": 0,
    "grnd_level": 0
  };

  weatherData: any[] = [];
  weatherName: any[] = [];

  latitude: number = 53.350140;
  longitude: number = -6.266155;

  notes: { title: string, content: string, index: number }[] = [];
  reminders: { title: string, content: string, index: number }[] = [];

  noteCount: number = 0;
  reminderCount: number = 0;

  segment: string = "notes";

  constructor(
    public navCtrl: NavController,
    private weatherService: WeatherService,
    private geolocation: Geolocation,
    private storage: Storage,
    public alertController: AlertController
  ) { }

  options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 3600
  };

  GetCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.weatherService.GetWeatherData(this.latitude, this.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    console.log(this.weatherMain);
    this.weatherService.GetCurrentCoordinates();
    this.weatherService.GetWeatherData(this.latitude, this.longitude).subscribe(
      (data) => {
        this.weatherMain = data.main;
        this.weatherName = data.name;
        this.weatherData = data.weather;
        console.log(this.weatherData);
        console.log(this.weatherMain);
        console.log(this.weatherName);
      }
    );
  }

  ngOnInit() {
    this.noteCount = Object.keys(this.notes).length;
    this.reminderCount = Object.keys(this.reminders).length;

    console.log(this.weatherMain);
    this.weatherService.GetCurrentCoordinates();
    this.weatherService.GetWeatherData(this.latitude, this.longitude).subscribe(
      (data) => {
        this.weatherMain = data.main;
        this.weatherName = data.name;
        this.weatherData = data.weather;
        console.log(this.weatherData);
        console.log(this.weatherMain);
        console.log(this.weatherName);
      }
    );
  }

  ionViewWillEnter() {
    this.storage.create().then(() => {

      this.storage.get('notes').then((data) => {
        this.notes = data ?? [];
        this.noteCount = Object.keys(this.notes).length;
      }).catch((error) => {
        console.error("Error getting notes:", error);
        this.notes = [];
        this.noteCount = 0;
      });

      this.storage.get('reminders').then((data) => {
        this.reminders = data ?? [];
        this.reminderCount = Object.keys(this.reminders).length;
      }).catch((error) => {
        console.error("Error getting reminders:", error);
        this.reminders = [];
        this.reminderCount = 0;
      });

    }).catch((error) => {
      console.error("Error creating storage:", error);
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are you sure you want to reset?',
      message: 'You will lose your data forever!!!',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            console.log('Confirm Cancelled - Do nothing');
          }
        },
        {
          text: 'Yes',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            this.storage.clear();
            window.location.reload();
          }
        }
      ]
    });
    await alert.present();
  }

  today: number = Date.now();
}
