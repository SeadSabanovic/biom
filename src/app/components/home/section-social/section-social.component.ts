import { debounceTime } from 'rxjs/operators';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Social } from 'src/app/interfaces/social';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ResizeService } from 'src/app/services/resize.service';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'section-social',
  templateUrl: './section-social.component.html',
  styleUrls: ['./section-social.component.scss'],
})
export class SectionSocialComponent implements AfterViewInit {
  @ViewChild('container') containerEl!: ElementRef;
  animation!: GSAPAnimation | null;
  socials: Social[] = [
    {
      image: 'wipe_green.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'kitchen.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'gold.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'white.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'wipe_green.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'kitchen.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'gold.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'white.png',
      href: 'https://www.instagram.com/',
    },
  ];
  constructor(private resizeService: ResizeService) {}

  animate() {
    return gsap.to(this.containerEl.nativeElement, {
      x: -250,
      scrollTrigger: {
        trigger: this.containerEl.nativeElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: false,
      },
    });
  }

  ngAfterViewInit() {
    // Timeout needed because of section scrollable's pin
    setTimeout(() => {
      this.animation = this.animate();
    }, 1000);

    this.resizeService.resize$.pipe(debounceTime(1000)).subscribe(() => {
      if (this.animation) {
        this.animation.kill();
        this.animation = this.animate();
      }
    });
  }
}
