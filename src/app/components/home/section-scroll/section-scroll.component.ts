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

  animation!: gsap.core.Tween | null;

  constructor(private resizeService: ResizeService) {}

  animate() {
    return gsap.to(this.containerEl.nativeElement, {
      x: `${-(
        this.containerEl.nativeElement.offsetWidth * (this.ITEMS.length - 1) -
        (this.ITEMS.length - 1) * -20
      )}`,
      scrollTrigger: {
        trigger: this.containerEl.nativeElement,
        start: 'bottom 80%',
        end: 'bottom 20%',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }

  ngAfterViewInit() {
    this.animation = this.animate();
    this.resizeService.resize$.subscribe(() => {
      this.animation?.kill();
      gsap.set(this.containerEl.nativeElement, {
        x: 0,
      });
      this.animation = this.animate();
    });
  }
}
