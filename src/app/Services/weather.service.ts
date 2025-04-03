//imported Modules


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  latitude: any = 53.350140; //latitude
  longitude: any = -6.266155; //longitude

  constructor(private httpClient: HttpClient, private geolocation: Geolocation) { }


  options = {
    timeout: 10000,
    // Request the device to provide the most accurate location
    enableHighAccuracy: true,
    maximumAge: 3600
  };

  
  GetCurrentCoordinates(): any {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude, this.longitude);
      this.GetWeatherData(this.latitude, this.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  // Method to fetch weather data from the OpenWeather API using the latitude and longitude
  GetWeatherData(latitude: number, longitude: number): Observable<any> {
    console.log(this.latitude, this.longitude);
    console.log('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=18c63d63d9d7c4d0335b9c5a99c20482');
    // Make a GET request to the OpenWeather API to get the weather data
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=18c63d63d9d7c4d0335b9c5a99c20482');
  }
}