import {Component, Input} from '@angular/core';
import {InsectType} from "../../../../shared/types/insect.type";

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss']
})
export class CollectionCardComponent {
  @Input()
  public insect: InsectType = new InsectType();
}
