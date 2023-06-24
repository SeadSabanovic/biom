import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  private resizeObservable: Observable<Event>;

  constructor() {
    this.resizeObservable = fromEvent(window, 'resize').pipe(debounceTime(200));
  }

  get resize$(): Observable<Event> {
    return this.resizeObservable;
  }
}
