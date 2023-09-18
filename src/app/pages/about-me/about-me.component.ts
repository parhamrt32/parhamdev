import {  Component, ElementRef, Renderer2, OnInit , HostListener, AfterViewInit  } from '@angular/core';
import { fadeIn, fadeOut } from '../../animation/fade';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [fadeOut, fadeIn],
})
export class AboutMeComponent implements OnInit , AfterViewInit  {



  @HostListener('window:resize' , ['$event'])
  onWindowResize(event : Event){
    this.calculateAndSetHeight();
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.calculateAndSetHeight();
  }

  calculateAndSetHeight() {
    const welcomeElement = this.elementRef.nativeElement.querySelector('.aboutMe');
    if (welcomeElement) {
      const windowHeight = window.innerHeight;
      this.renderer.setStyle(welcomeElement, 'height', `${windowHeight}px`);
    }
  }

   observer = new IntersectionObserver(( entries ) => {
    entries.forEach( (entry) => {

    } )
  })
}
