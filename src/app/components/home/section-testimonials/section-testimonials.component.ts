import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/interfaces/testimonial';

@Component({
  selector: 'section-testimonials',
  templateUrl: './section-testimonials.component.html',
  styleUrls: ['./section-testimonials.component.scss'],
})
export class SectionTestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      author: 'RACHAEL H.',
      testimonial:
        'Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
