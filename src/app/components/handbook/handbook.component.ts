import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GenusService } from '../../../shared/services/genus.service';
import { CollectorService } from '../../../shared/services/collector.service';
import { DefinedService } from '../../../shared/services/defined.service';
import { ToastService } from '../../../shared/services/toast.service';
import { GenusType } from '../../../shared/types/genus.type';
import { CollectorType } from '../../../shared/types/collector.type';
import { DefinedType } from '../../../shared/types/defined.type';
import { BindingsService } from '../../../shared/services/bindings.service';
import { BindingsType } from '../../../shared/types/bindings.type';

@Component({
  selector: 'app-handbook',
  templateUrl: './handbook.component.html',
  styleUrls: ['./handbook.component.scss'],
})
export class HandbookComponent implements OnInit {
  public $onDestroy: Subject<void> = new Subject<void>();

  public genuses: GenusType[] = [];
  public collectors: CollectorType[] = [];
  public defineds: DefinedType[] = [];
  public bindings: BindingsType[] = [];

  constructor(
    public genusService: GenusService,
    public collectorService: CollectorService,
    public definedService: DefinedService,
    public bindingsService: BindingsService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.loadGenus();
    this.loadCollector();
    this.loadDefined();
    this.loadBindings();
  }

  public loadGenus() {
    this.genusService
      .loader()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((data: GenusType[]) => {
        this.genuses = data;
      });
  }

  public loadCollector() {
    this.collectorService
      .loader()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((data: CollectorType[]) => {
        this.collectors = data;
      });
  }

  public loadDefined() {
    this.definedService
      .loader()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((data: DefinedType[]) => {
        this.defineds = data;
      });
  }

  public loadBindings() {
    this.bindingsService
      .loader()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((data: BindingsType[]) => {
        this.bindings = data;
      });
  }
}
