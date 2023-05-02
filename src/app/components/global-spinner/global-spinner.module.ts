import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GlobalSpinnerComponent} from "./global-spinner.component";
import {GlobalSpinnerService} from "./global-spinner.service";
import {ProgressSpinnerModule} from "primeng/progressspinner";



@NgModule({
  declarations: [GlobalSpinnerComponent],
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ],
  exports: [
    GlobalSpinnerComponent
  ],
  providers: [GlobalSpinnerService]
})
export class GlobalSpinnerModule { }
