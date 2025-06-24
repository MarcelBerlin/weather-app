import { Component } from '@angular/core';
import { WeatherComponent } from "./components/weather/weather.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-app';
}
