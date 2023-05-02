import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {LoginService} from "./login.service";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {TooltipModule} from "primeng/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
import {GlobalSpinnerModule} from "../global-spinner/global-spinner.module";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    TooltipModule,
    ReactiveFormsModule,
    GlobalSpinnerModule
  ],
  providers: [LoginService],
  exports: [LoginComponent]
})
export class LoginModule { }
