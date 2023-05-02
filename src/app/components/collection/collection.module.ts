import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';
import { CollectionService } from './collection.service';
import { CollectionCardModule } from './collection-card/collection-card.module';
import { DropdownModule } from 'primeng/dropdown';
import {SpinnerModule} from "../../../shared/components/spinner.module";
import {ReactiveFormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    CollectionCardModule,
    DropdownModule,
    SpinnerModule,
    ReactiveFormsModule,
    DialogModule,
  ],
  providers: [CollectionService],
})
export class CollectionModule {}
