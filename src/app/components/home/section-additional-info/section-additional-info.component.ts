import { Component } from '@angular/core';
import { BiomInfo } from 'src/app/interfaces/biom-info';

@Component({
  selector: 'app-section-additional-info',
  templateUrl: './section-additional-info.component.html',
  styleUrls: ['./section-additional-info.component.scss'],
})
export class SectionAdditionalInfoComponent {
  info: BiomInfo[] = [
    {
      icon: 'assets/info/biodegradable.png',
      info: '100% biodegradable',
    },
    {
      icon: 'assets/info/plastic.png',
      info: 'Plastic-free',
    },
    {
      icon: 'assets/info/plant.png',
      info: '100% plant-based',
    },
  ];

  constructor() {}
}
