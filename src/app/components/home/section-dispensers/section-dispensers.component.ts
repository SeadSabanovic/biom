import { Component } from '@angular/core';

@Component({
  selector: 'section-dispensers',
  templateUrl: './section-dispensers.component.html',
  styleUrls: ['./section-dispensers.component.scss'],
})
export class SectionDispensersComponent {
  dispensers = [
    { color: 'green', title: 'Biom Dispenser', caption: 'Ocean Teal' },
    { color: 'white', title: 'Biom Dispenser', caption: 'White' },
    { color: 'black', title: 'Biom Dispenser', caption: 'Ink Black' },
  ];
}
