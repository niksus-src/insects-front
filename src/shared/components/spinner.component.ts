import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  animations: [
    trigger('showTrigger', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          visibility: 'hidden',
        })
      ),
      transition(
        'show => hide',
        animate('300ms ease-out', style({ opacity: 0, visibility: 'hidden' }))
      ),
      transition(
        'hide => show',
        animate('300ms ease-in', style({ opacity: 1, visibility: 'visible' }))
      ),
    ]),
  ],
})
export class SpinnerComponent implements OnInit {
  public show: boolean = false;

  constructor(private spinnerService: SpinnerService) {}

  public ngOnInit() {
    this.spinnerService.showSpinner.subscribe(
      (value: boolean) => (this.show = value)
    );
  }
}
