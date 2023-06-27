import { debounceTime, tap } from 'rxjs/operators';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ResizeService } from 'src/app/services/resize.service';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'section-scroll',
  templateUrl: './section-scroll.component.html',
  styleUrls: ['./section-scroll.component.scss'],
})
export class SectionScrollComponent implements AfterViewInit {
  @ViewChild('container') containerEl!: ElementRef;
  @ViewChild('content') contentEl!: ElementRef;
  @ViewChildren('item') itemEl!: QueryList<ElementRef>;
  ITEMS = [
    {
      img: 'assets/scroll/living_room.png',
      text: 'Living Room',
    },
    {
      img: 'assets/scroll/office.png',
      text: 'Office',
    },
    {
      img: 'assets/scroll/kitchen.png',
      text: 'Kitchen',
    },
    {
      img: 'assets/scroll/bathroom.png',
      text: 'Bathroom',
    },
  ];

  animation!: ScrollTrigger | null;

  constructor(
    private resizeService: ResizeService,
    private elementRef: ElementRef
  ) {}

  calculateX() {
    return `${-(
      this.itemEl.toArray()[0].nativeElement.offsetWidth *
        (this.ITEMS.length - 1) -
      (this.ITEMS.length - 1) * -20
    )}px`;
  }

  animate() {
    const itemElements = this.itemEl.toArray().map((el) => el.nativeElement);
    const animation = gsap.to(itemElements, {
      x: this.calculateX(),
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: this.containerEl.nativeElement,
      start: 'center center',
      end: '+=150%',
      scrub: 1,
      anticipatePin: 0.4,
      pin: this.elementRef.nativeElement,
      animation: animation,
    });

    return scrollTrigger;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animation = this.animate();
    }, 100);

    this.resizeService.resize$
      .pipe(
        tap(() => {
          this.animation?.kill(true, false);
        }),
        debounceTime(200)
      )
      .subscribe(() => {
        this.animation = this.animate();
      });
  }
}
