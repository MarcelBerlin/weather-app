import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.openWeatherApiKey}&units=metric&lang=de`;
     return this.http.get<any>(url);
  }

  getForecast(city: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${environment.openWeatherApiKey}&units=metric&lang=de`;
    return this.http.get<any>(url);
  }




}
