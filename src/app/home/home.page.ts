/* eslint-disable @typescript-eslint/dot-notation */
import { environment } from './../../environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weatherTemp: any;
  todayDate = new Date();
  cityName: any = '';
  name = '';
  weatherIcon: any;
  weatherDetails: any;
  loading = true;

  constructor(public httpClient: HttpClient) {
    // this.loadData();
  }

  loadData() {
    this.httpClient.get(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`).subscribe(result => {
      console.log(result);
      this.weatherTemp = result['main'];
      this.name = result['name'];
      this.weatherDetails = result['weather'][0];
      console.log(this.weatherTemp);
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`;
      this.loading = false;
    });
  }

}
