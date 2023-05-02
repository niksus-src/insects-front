import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CollectionCardComponent} from "./collection-card.component";
import {CollectionCardService} from "./collection-card.service";



@NgModule({
  declarations: [CollectionCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CollectionCardComponent
  ],
  providers: [CollectionCardService]
})
export class CollectionCardModule { }
