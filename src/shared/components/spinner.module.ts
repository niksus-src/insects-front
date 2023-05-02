import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinnerService} from "./spinner.service";
import {SpinnerComponent} from "./spinner.component";
import {ProgressSpinnerModule} from "primeng/progressspinner";



@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ],
  exports: [
    SpinnerComponent
  ],
  providers: [SpinnerService]
})
export class SpinnerModule { }
