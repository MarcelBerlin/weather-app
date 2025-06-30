import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-lottie-test',
  imports: [LottieComponent],
  template: `<ng-lottie [options]="options" style="width:200px;height:200px;"></ng-lottie>`,
  styleUrl: './lottie-test.component.scss'
})
export class LottieTestComponent {
  options: AnimationOptions = {
    path: '/lottie/sunny.json' // prüfe, ob die Datei da ist!
  }
}
