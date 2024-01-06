import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  isMobile: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.checkWindowWidth();
    this.renderer.setStyle(document.body, 'overflow', this.isMobile ? 'auto' : 'hidden');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkWindowWidth();
    this.renderer.setStyle(document.body, 'overflow', this.isMobile ? 'auto' : 'hidden');
  }

  checkWindowWidth(): void {
    this.isMobile = window.innerWidth < 768; // Set your mobile threshold width here
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
