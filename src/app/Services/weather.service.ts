//imported Modules


import { Injectable } from '@angular/core';
// It's used in this service to fetch weather data from OpenWeather API.
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Geolocation is a Cordova plugin that provides access to the device's GPS
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  latitude: any =  53.2828;  //latitude-Roscommon
  longitude: any = -9.04489; //longitude
  //  HttpClient and Geolocation services
  constructor(private httpClient: HttpClient, private geolocation: Geolocation) { }


  options = {
    timeout: 10000,
    // Request the device to provide the most accurate location
    enableHighAccuracy: true,
    maximumAge: 3600
  };

  
  GetCurrentCoordinates(): any {
     // Use the geolocation API to get the current position of the device
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude, this.longitude);
      this.GetWeatherData(this.latitude, this.longitude);
    }).catch((error) => {
      // Handle any errors that occur while retrieving the geolocation
      console.log('Error getting location', error);
    });
  }

  // Method to fetch weather data from the OpenWeather API using the latitude and longitude
  GetWeatherData(latitude: number, longitude: number): Observable<any> {
    console.log(this.latitude, this.longitude);
    console.log('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=18c63d63d9d7c4d0335b9c5a99c20482');
    // Make a GET request to the OpenWeather API to get the weather data
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=18c63d63d9d7c4d0335b9c5a99c20482');
  }
}