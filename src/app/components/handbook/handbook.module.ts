import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandbookService } from './handbook.service';
import { HandTableComponent } from './hand-table/hand-table.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [HandTableComponent],
  imports: [CommonModule, TableModule, InputTextModule, FormsModule, DialogModule, ReactiveFormsModule],
  providers: [HandbookService],
  exports: [
    HandTableComponent
  ]
})
export class HandbookModule {}
