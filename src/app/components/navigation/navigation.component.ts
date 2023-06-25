import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavLinks } from 'src/app/interfaces/nav-link';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @ViewChild('toggle') toggle!: ElementRef;
  isActive = false;

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

  onToggle() {
    this.isActive = !this.isActive;
    this.toggle.nativeElement.classList.toggle('hamburger--active')
  }
}
