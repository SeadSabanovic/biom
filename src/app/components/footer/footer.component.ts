import { Component } from '@angular/core';
import { NavLinks } from 'src/app/interfaces/nav-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
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
          link_text: 'FAQS',
        },
        {
          route: '',
          link_text: 'ACCOUNT',
        },
        {
          route: '',
          link_text: 'HELP',
        },
      ],
    ],
  };

  SOCIALS = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: 'assets/icons/ig.svg'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: 'assets/icons/fb.svg'
    },
  ];
}
