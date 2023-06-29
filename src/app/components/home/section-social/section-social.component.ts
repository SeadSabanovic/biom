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
      image: 'assets/social/wipe_green.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'assets/social/kitchen.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'assets/social/gold.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'assets/social/white.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'assets/social/wipe_green.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'assets/social/kitchen.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'assets/social/gold.png',
      href: 'https://www.instagram.com/',
    },
    {
      image: 'assets/social/white.png',
      href: 'https://www.instagram.com/',
    },
  ];
  constructor(private resizeService: ResizeService) {}

  animate() {
    return gsap.to(this.containerEl.nativeElement, {
      x: -200,
      scrollTrigger: {
        trigger: this.containerEl.nativeElement,
        start: 'top bottom',
        end: '+=100%',
        scrub: true,
        invalidateOnRefresh: false,
      },
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animation = this.animate();
    }, 1000);

    this.resizeService.resize$
      .pipe(
        debounceTime(2000) // Debounce for 2000ms (adjust as needed)
      )
      .subscribe(() => {
        if (this.animation) {
          this.animation.kill();
          this.animation = this.animate();
        }
      });
  }
}
