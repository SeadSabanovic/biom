import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Social } from 'src/app/interfaces/social';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'section-social',
  templateUrl: './section-social.component.html',
  styleUrls: ['./section-social.component.scss'],
})
export class SectionSocialComponent implements AfterViewInit {
  @ViewChild('container') containerEl!: ElementRef;
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

  ngAfterViewInit() {
    gsap.to(this.containerEl.nativeElement, {
      x: -50,
      scrollTrigger: {
        trigger: this.containerEl.nativeElement,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
    });
  }
}
