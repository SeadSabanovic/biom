import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ResizeService } from 'src/app/services/resize.service';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'section-scroll',
  templateUrl: './section-scroll.component.html',
  styleUrls: ['./section-scroll.component.scss'],
})
export class SectionScrollComponent implements AfterViewInit {
  @ViewChild('container') containerEl!: ElementRef;
  ITEMS = [
    {
      img: 'assets/scroll/living_room.png',
      text: 'Living Room',
    },
    {
      img: 'assets/scroll/office.png',
      text: 'Office',
    },
    {
      img: 'assets/scroll/kitchen.png',
      text: 'Kitchen',
    },
    {
      img: 'assets/scroll/bathroom.png',
      text: 'Bathroom',
    },
  ];

  constructor(private resizeService: ResizeService) {}

  ngAfterViewInit() {
    let animation = gsap.to(this.containerEl.nativeElement, {
      x: `${-(
        this.containerEl.nativeElement.offsetWidth * (this.ITEMS.length - 2) -
        (this.ITEMS.length - 1) * -20
      )}`,
      scrollTrigger: {
        trigger: this.containerEl.nativeElement,
        start: 'top 40%',
        end: 'bottom 10%',
        scrub: 1,
      },
    });

    this.resizeService.resize$.subscribe(() => {
      animation.invalidate().play();
    });
  }
}
