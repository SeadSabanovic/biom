import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BiomInfo } from 'src/app/interfaces/biom-info';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'section-intro',
  templateUrl: './section-intro.component.html',
  styleUrls: ['./section-intro.component.scss'],
})
export class SectionIntroComponent implements AfterViewInit {
  @ViewChild('scroll') scrollEl!: ElementRef<HTMLElement>;
  info: BiomInfo[] = [
    {
      icon: 'assets/info/design.png',
      info: 'Beautiful design, fit for your home',
    },
    {
      icon: 'assets/info/durable.png',
      info: 'Durable stainless steel exterior',
    },
    {
      icon: 'assets/info/toxic.png',
      info: 'Non-toxic, BPA free',
    },
  ];

  ngAfterViewInit() {
    this.animate();
  }

  animate() {
    let mm = gsap.matchMedia();

    mm.add('(max-width: 1250px)', () => {
      gsap.to(this.scrollEl.nativeElement, {
        bottom: '80%',
        scrollTrigger: {
          trigger: this.scrollEl.nativeElement,
          start: 'top  center',
          end: 'bottom 100px',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    mm.add('(min-width: 1250px)', () => {
      gsap.to(this.scrollEl.nativeElement, {
        top: '130%',
        scrollTrigger: {
          trigger: this.scrollEl.nativeElement,
          start: 'top  center',
          end: 'bottom 100px',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });
  }
}
