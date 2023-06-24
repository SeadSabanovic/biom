import { Component, OnInit } from '@angular/core';
import { BiomInfo } from 'src/app/interfaces/biom-info';

@Component({
  selector: 'section-intro',
  templateUrl: './section-intro.component.html',
  styleUrls: ['./section-intro.component.scss'],
})
export class SectionIntroComponent implements OnInit {
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
  constructor() {}

  ngOnInit() {}
}
