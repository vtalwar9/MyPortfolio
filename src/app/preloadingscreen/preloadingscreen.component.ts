import { Component, Input, OnInit } from '@angular/core';
import { SplashAnimationType } from "./preloadinganimations";

@Component({
  selector: 'app-preloadingscreen',
  templateUrl: './preloadingscreen.component.html',
  styleUrls: ['./preloadingscreen.component.css']
})
export class PreloadingscreenComponent implements OnInit {
  windowWidth!: string;
  splashTransition!: string;
  opacityChange: number = 1;
  showSplash = true;

  @Input() animationDuration: number = 0.5;
  @Input() duration: number = 2;
  @Input() animationType: SplashAnimationType = SplashAnimationType.SlideRight;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      let transitionStyle = "";
      switch (this.animationType) {
        case SplashAnimationType.SlideLeft:
          this.windowWidth = "-" + window.innerWidth + "px";
          transitionStyle = "left " + this.animationDuration + "s";
          break;
        case SplashAnimationType.SlideRight:
          this.windowWidth = window.innerWidth + "px";
          transitionStyle = "left " + this.animationDuration + "s";
          break;
        case SplashAnimationType.FadeOut:
          transitionStyle = "opacity " + this.animationDuration + "s";
          this.opacityChange = 0;
      }

      this.splashTransition = transitionStyle;

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, this.animationDuration * 1000);
    }, this.duration * 1000);
  }
}
