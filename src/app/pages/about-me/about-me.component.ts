import {  Component, ElementRef, Renderer2, OnInit , HostListener, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { fadeIn, fadeOut } from '../../libs/animation/fade';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [fadeOut, fadeIn],
})
export class AboutMeComponent implements OnInit , AfterViewInit  {

  @ViewChildren('item') items: QueryList<ElementRef> | undefined;

  @HostListener('window:resize' , ['$event'])
  onWindowResize(event : Event){
    this.calculateAndSetHeight();
  }



  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit(): void {

    const observer = new IntersectionObserver( entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
         entry.target.classList.add('show')

        }else{
          entry.target.classList.remove('show')
        }
      })
    } )

    this.items?.forEach(element => {
      observer.observe(element.nativeElement)
    } )




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

}
