import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer.component";
import {FooterService} from "./footer.service";



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent
  ],
  providers: [FooterService]
})
export class FooterModule { }
