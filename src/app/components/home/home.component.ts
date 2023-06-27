import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  constructor(private ElementRef: ElementRef) {}
  ngAfterViewInit() {
    setTimeout(() => {
      gsap.to(this.ElementRef.nativeElement, {
        autoAlpha: 1,
        ease: 'Circ.easeOut',
        duration: 1.5,
      });
    }, 1000);
  }
}
