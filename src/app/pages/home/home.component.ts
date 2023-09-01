import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { fadeIn, fadeOut } from '../../animation/fade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeOut, fadeIn],
})
export class HomeComponent implements OnInit {
  fadeState = true;
  showNavBar = false;
  title = 'parhambarati';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.calculateAndSetHeight();
    this.Disappear();
  }
  calculateAndSetHeight() {
    const welcomeElement = this.elementRef.nativeElement.querySelector('.home');
    if (welcomeElement) {
      const windowHeight = window.innerHeight;
      this.renderer.setStyle(welcomeElement, 'height', `${windowHeight}px`);
    }
  }

  Disappear() {
    setTimeout(() => {
      this.fadeState = false;
      this.showNavBar = true;
    }, 3000); // Disappear after 3 seconds
  }

}
