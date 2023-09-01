import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { fadeIn, fadeOut } from './animation/fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  fadeState = true;
  showNavBar = false;
  title = 'parhambarati';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {

  }



}
