import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GlobalSpinnerService {
  public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
