import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label = 'Input a label';
  @Input() style = 'light';
  @Input() icon = '';
  constructor() {}

  ngOnInit() {}
}
