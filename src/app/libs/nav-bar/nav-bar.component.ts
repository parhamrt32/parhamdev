import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements AfterViewInit {
  showDrawerState: boolean = false;

  @ViewChild('drawer') drawer: ElementRef | undefined;
  @ViewChild('menu') menu: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (this.drawer?.nativeElement.contains(event.target)) {
        return;
      } else {
        this.menu?.nativeElement.contains(event.target)
          ? null
          : this.closeDrawer();
      }
    });
  }

  showDrawer() {
    this.showDrawerState = true;
  }

  closeDrawer() {
    this.showDrawerState = false;
  }
}
