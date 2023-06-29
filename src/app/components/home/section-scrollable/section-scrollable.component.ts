import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'section-scrollable',
  templateUrl: './section-scrollable.component.html',
  styleUrls: ['./section-scrollable.component.scss'],
})
export class SectionScrollableComponent implements AfterViewInit {
  @ViewChild('container') containerEl!: ElementRef<HTMLElement>;
  ITEMS = [
    {
      img: 'living_room.png',
      text: 'Living Room',
    },
    {
      img: 'office.png',
      text: 'Office',
    },
    {
      img: 'kitchen.png',
      text: 'Kitchen',
    },
    {
      img: 'bathroom.png',
      text: 'Bathroom',
    },
  ];

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.animate();
  }

  animate() {
    gsap.to(this.containerEl.nativeElement, {
      left: '-300%',
      marginLeft: '-60px',
      scrollTrigger: {
        pin: this.elRef.nativeElement,
        start: 'center center',
        end: '+=150%',
        trigger: this.containerEl.nativeElement,
        scrub: 1,
        anticipatePin: 0.4,
      },
    });
  }
}
