import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { LottieComponent } from 'ngx-lottie';
import { AnimationOptions } from 'ngx-lottie';



@Component({
  selector: 'app-weather',
  imports: [
    CommonModule,
    FormsModule,
    LottieComponent
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})



export class WeatherComponent {

  city: string = '';
  weatherData: any = null;
  isLoading: boolean = false;
  errorMessage: string | null = null;
  forecastData: any[] = [];
  bgClass: string = '';
  isDarkMode = false;

  lottieOptions: AnimationOptions = {
    path: ''
  };

  constructor(private weatherService: WeatherService) { }

  getWeather() {
    if (!this.city) {
      this.errorMessage = 'Bitte eine Stadt eingeben.'
      return;
    }


    this.isLoading = true;
    this.errorMessage = null;
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.isLoading = false;

        const main = data.weather[0].main.toLowerCase();
        this.bgClass = main.replace(' ', '-');

        this.updateLottieAnimation(data.weather[0].icon);
      },
      error: (err) => {
        console.error('Fehler:', err);
        this.errorMessage = 'Stadt nicht gefunden oder API-Fehler.';
        this.isLoading = false;
      }
    });

    this.weatherService.getForecast(this.city).subscribe({
      next: (data) => {
        console.log('Forecast:', data);
        // Es wird nur jeder 8. Eintrag genommen (1x pro Tag)
        this.forecastData = data.list.filter((_: any, index: number) => index % 5 === 0);
      }
    })
  }

  updateLottieAnimation(icon: string) {
    if (icon.startsWith('01')) {
      // this.lottieOptions = { path: }
    }
  }

  getIconPath(): string {
    if (!this.weatherData) return '';
    const icon = this.weatherData.weather[0].icon;
    return this.mapIcon(icon)
  }

  getForecastIconPath(item: any): string {
    const icon = item.weather[0].icon;
    return this.mapIcon(icon);
  }

  mapIcon(icon: string): string {
    switch (icon) {
      case '01d': return 'day.svg';
      case '01n': return 'night.svg';
      case '02d': return 'cloudy-day-1.svg';
      case '02n': return 'cloudy-night-1.svg';
      case '03d':
      case '03n': return 'cloudy-day-3.svg';
      case '04d':
      case '04n': return 'cloudy.svg';
      case '09d':
      case '09n': return 'rainy-1.svg';
      case '10d':
      case '10n': return 'rainy-2.svg';
      case '11d':
      case '11n': return 'thunder.svg';
      case '13d':
      case '13n': return 'snowy-1.svg';
      case '50d':
      case '50n': return 'cloudy.svg';
      default: return 'weather.svg;' //fallback
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode; 
  }
}

