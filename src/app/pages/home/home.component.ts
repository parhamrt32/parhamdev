import {
  Component,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
} from '@angular/core';
import { fadeIn, fadeOut } from '../../libs/animation/fade';
import { WelcomeStateService } from 'src/app/libs/service/welcome-state.service';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeOut, fadeIn],
})
export class HomeComponent implements OnInit {

  stars: NodeListOf<HTMLElement> | undefined;


  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.calculateAndSetHeight();
  }

  welcomeText = true;
  showElements = false;
  number = 0;
  title = 'parhambarati';

  constructor(
    private welcomeState: WelcomeStateService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit() {
    if (this.welcomeState.getVisited()) {
      console.log('visited');

      this.showElements = true;
      this.welcomeText = false;
    } else {
      this.welcomeState.setVisited(true);
    }

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
      this.welcomeText = false;
      this.showElements = true;
    }, 2000); // Disappear after 3 seconds
  }



}
