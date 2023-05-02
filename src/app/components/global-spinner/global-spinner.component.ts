import { Component, Input, OnInit } from '@angular/core';
import { GlobalSpinnerService } from './global-spinner.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-global-spinner',
  templateUrl: './global-spinner.component.html',
  styleUrls: ['./global-spinner.component.scss'],
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
export class GlobalSpinnerComponent implements OnInit {
  public show: boolean = false;

  constructor(private spinnerService: GlobalSpinnerService) {}

  public ngOnInit() {
    this.spinnerService.showSpinner.subscribe(
      (value: boolean) => (this.show = value)
    );
  }
}
