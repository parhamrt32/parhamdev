import {
  Component,
  HostListener,
  OnInit,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.calculateAndSetHeight();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.calculateAndSetHeight();
  }
  calculateAndSetHeight() {
    const welcomeElement =
      this.elementRef.nativeElement.querySelector('.projectsPage');
    if (welcomeElement) {
      const windowHeight = window.innerHeight;
      this.renderer.setStyle(welcomeElement, 'height', `${windowHeight}px`);
    }
  }
}
