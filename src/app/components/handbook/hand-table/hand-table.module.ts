import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HandbookComponent} from "../handbook.component";
import {HandTableService} from "./hand-table.service";
import {TabViewModule} from "primeng/tabview";
import {BadgeModule} from "primeng/badge";
import {HandbookModule} from "../handbook.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [HandbookComponent],
  imports: [
    CommonModule,
    TabViewModule,
    BadgeModule,
    HandbookModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HandTableService]
})
export class HandTableModule { }
