import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {HeaderService} from "./header.service";
import {MenubarModule} from "primeng/menubar";
import {SharedModule} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MenubarModule,
    SharedModule,
    InputTextModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [HeaderService]
})
export class HeaderModule { }
