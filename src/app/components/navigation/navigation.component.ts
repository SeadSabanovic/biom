import {
  Component,
  ViewChild,
  ElementRef,
  HostBinding,
  AfterViewInit,
} from '@angular/core';
import { gsap } from 'gsap';
import { NavLinks } from 'src/app/interfaces/nav-link';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild('toggle') toggle!: ElementRef;
  @ViewChild('mobile') mobileNav!: ElementRef;
  @HostBinding('class.mob--active') isActive = false;
  isAnimating = false;

  NAV_LINKS_MAIN: NavLinks = {
    links: [
      [
        {
          route: '',
          link_text: 'SHOP',
        },
        {
          route: '',
          link_text: 'WHY BIOM',
        },
        {
          route: '',
          link_text: 'SCENTS',
        },
      ],
      [
        {
          route: '',
          link_text: 'SHOP',
        },
        {
          route: '',
          link_text: 'CART',
        },
      ],
    ],
  };

  ngAfterViewInit(): void {
    gsap.set(this.mobileNav.nativeElement, {
      autoAlpha: 0,
    });
  }

  toggleAnimation() {
    this.isAnimating = !this.isAnimating;

    let tl = gsap.timeline();

    if (this.isActive)
      tl.to(this.mobileNav.nativeElement, {
        autoAlpha: 1,
      });
    else
      tl.to(this.mobileNav.nativeElement, {
        autoAlpha: 0,
      });
  }

  onToggle() {
    this.isActive = !this.isActive;
    document.body.classList.toggle('nav--active');
    this.toggle.nativeElement.classList.toggle('hamburger--active');
    this.mobileNav.nativeElement.classList.toggle('nav-mobile--active');
    this.toggleAnimation();
  }
}
