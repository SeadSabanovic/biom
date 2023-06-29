import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  private resizeObservable: Observable<Event>;

  constructor() {
    this.setWindowHeight();
    this.resizeObservable = fromEvent(window, 'resize').pipe(debounceTime(100));
  }

  get resize$(): Observable<Event> {
    this.setWindowHeight();
    return this.resizeObservable;
  }

  setWindowHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
