import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'section-video',
  templateUrl: './section-video.component.html',
  styleUrls: ['./section-video.component.scss'],
})
export class SectionVideoComponent implements AfterViewInit {
  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
  constructor() {}

  ngAfterViewInit() {
    const VIDEO_EL = this.videoRef.nativeElement;
    // VIDEO_EL.play();
    console.log();
  }
}
