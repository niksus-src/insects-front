import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { GenusType } from '../../../../shared/types/genus.type';
import { DefinedType } from '../../../../shared/types/defined.type';
import { CollectorType } from '../../../../shared/types/collector.type';
import { BindingsType } from '../../../../shared/types/bindings.type';
import { Table } from 'primeng/table';
import { GenusService } from '../../../../shared/services/genus.service';
import {DefinedService} from "../../../../shared/services/defined.service";
import {CollectorService} from "../../../../shared/services/collector.service";
import {BindingsService} from "../../../../shared/services/bindings.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../../../../shared/services/toast.service";

@Component({
  selector: 'app-hand-table',
  templateUrl: './hand-table.component.html',
  styleUrls: ['./hand-table.component.scss'],
})
export class HandTableComponent {
  @Input()
  public data: GenusType[] | DefinedType[] | CollectorType[] | BindingsType[] =
    [];

  @Input()
  public service: GenusService | DefinedService | CollectorService | BindingsService | undefined = undefined;

  @ViewChild('dt')
  public table: Table | undefined = undefined;

  @Output()
  public onChange: EventEmitter<void> = new EventEmitter<void>();

  public addForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  })

  public selectedItems:
    | GenusType[]
    | DefinedType[]
    | CollectorType[]
    | BindingsType[] = [];

  public showModalTr: boolean = false;

  constructor(private toastService: ToastService) {
  }

  public applyFilterGlobal($event: any, stringVal: string) {
    this.table?.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }

  public delete(): void {
    this.selectedItems.forEach((item) => {
      this.service?.delete(item._id).subscribe((result) => {
        this.selectedItems = [];
        this.onChange.emit();
      });
    })
  }

  public add() {
    if (this.addForm.invalid) {
      this.addForm.get('name')?.markAsDirty();
      this.addForm.get('name')?.markAllAsTouched();
      return;
    }
    this.service?.add(this.addForm.get('name')?.value).subscribe(() => {
      this.addForm.get('name')?.setValue('');
      this.addForm.get('name')?.updateValueAndValidity();
      this.toastService.showSucces('Новая запись успешно добавлена');
      this.onChange.emit();
    })
  }
}
