import { Component, ElementRef, Renderer2, OnInit , HostListener } from '@angular/core';
import { fadeIn, fadeOut } from '../../libs/animation/fade';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  animations: [fadeOut, fadeIn],
})
export class ContactMeComponent implements OnInit {


  @HostListener('window:resize' , ['$event'])
  onWindowResize(event : Event){
    this.calculateAndSetHeight();
  }

  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.calculateAndSetHeight();
  }

  calculateAndSetHeight() {
    const welcomeElement = this.elementRef.nativeElement.querySelector('.contactMe');
    if (welcomeElement) {
      const windowHeight = window.innerHeight;
      this.renderer.setStyle(welcomeElement, 'height', `${windowHeight}px`);
    }
  }

  onSubmit() {
    console.log(this.formData);
    // Here you can add logic to send the form data (e.g., through a service)
  }

}
