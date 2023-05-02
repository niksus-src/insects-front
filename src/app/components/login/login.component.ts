import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { UserType } from '../../../shared/types/user.type';
import { ResultLogin } from '../../../shared/types/result.type';
import { ToastService } from '../../../shared/services/toast.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { GlobalSpinnerService } from '../global-spinner/global-spinner.service';
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  public $onDestroy: Subject<void> = new Subject<void>();

  constructor(
    private loginService: LoginService,
    private toastService: ToastService,
    private spinnerService: GlobalSpinnerService,
    private authService: AuthService
  ) {}

  public ngOnDestroy() {
    this.$onDestroy.next();
    this.$onDestroy.complete();
  }

  public loginForm = new FormGroup({
    login: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  public login() {
    this.loginForm.updateValueAndValidity();
    this.loginForm.controls['login'].markAsDirty();
    this.loginForm.controls['password'].markAsDirty();
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;
    this.spinnerService.showSpinner.next(true);
    this.loginService
      .login(this.loginForm.getRawValue())
      .pipe(takeUntil(this.$onDestroy))
      .subscribe({
        next: (data: ResultLogin) => {
          this.authService.auth(data);
          this.spinnerService.showSpinner.next(false);
        },
        error: (errBody: HttpErrorResponse) => {
          this.toastService.showError(errBody.message);
          this.spinnerService.showSpinner.next(false);
        },
      });
  }
}
