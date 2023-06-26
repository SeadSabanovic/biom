import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
  Renderer2,
  QueryList,
} from '@angular/core';
import { Testimonial } from 'src/app/interfaces/testimonial';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'section-testimonials',
  templateUrl: './section-testimonials.component.html',
  styleUrls: ['./section-testimonials.component.scss'],
})
export class SectionTestimonialsComponent implements AfterViewInit {
  @ViewChild('container') containerEl!: ElementRef;
  @ViewChildren('testimonial') testimonialsEl!: QueryList<ElementRef>;

  TESTIMONIALS: Testimonial[] = [
    {
      author: 'RACHAEL H.',
      testimonial:
        'Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.',
    },
    {
      author: 'Twyla W.',
      testimonial:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      author: 'Randy T.',
      testimonial:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      author: 'John D.',
      testimonial:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  activeIndex = 0;
  activeClass = 'section-testimonials__inner__container__testimonial--active';

  constructor(
    private renderer: Renderer2,
    private resizeService: ResizeService
  ) {}

  ngAfterViewInit() {
    this.setActiveTestimonal(this.activeIndex);

    this.resizeService.resize$.subscribe(() => {
      this.setHeight();
    });
  }

  setHeight() {
    this.renderer.setStyle(
      this.containerEl.nativeElement,
      'height',
      `${
        this.testimonialsEl.toArray()[this.activeIndex].nativeElement
          .offsetHeight
      }px`
    );
  }

  setActiveTestimonal(index: number) {
    this.activeIndex = index;
    const testimonials = this.testimonialsEl.toArray();
    for (let i = 0; i < testimonials.length; i++) {
      if (
        i !== this.activeIndex &&
        testimonials[i].nativeElement.classList.contains(this.activeClass)
      ) {
        testimonials[i].nativeElement.classList.remove(this.activeClass);
      } else if (i === this.activeIndex)
        testimonials[i].nativeElement.classList.add(this.activeClass);
    }

    this.setHeight();
  }
}
