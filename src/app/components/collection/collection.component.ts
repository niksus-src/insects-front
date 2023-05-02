import { Component, OnDestroy, OnInit } from '@angular/core';
import { CollectionService } from './collection.service';
import { InsectType } from '../../../shared/types/insect.type';
import { Subject, takeUntil } from 'rxjs';
import { GenusService } from '../../../shared/services/genus.service';
import { GenusType } from '../../../shared/types/genus.type';
import { CollectorType } from '../../../shared/types/collector.type';
import { DefinedType } from '../../../shared/types/defined.type';
import { CollectorService } from '../../../shared/services/collector.service';
import { DefinedService } from '../../../shared/services/defined.service';
import { SpinnerService } from '../../../shared/components/spinner.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit, OnDestroy {
  public $onDestroy: Subject<void> = new Subject<void>();

  public insects: InsectType[] = [];
  public insectsFiltered: InsectType[] = [];
  public genuses: GenusType[] = [];
  public collectors: CollectorType[] = [];
  public defineds: DefinedType[] = [];

  public disableMore: boolean = false;

  public filerForm = new FormGroup({
    genus: new FormControl<GenusType | null>(null),
    collector: new FormControl<CollectorType | null>(null),
    defined: new FormControl<DefinedType | null>(null),
  });

  public showModalTr: boolean = false;

  public selectedIns: InsectType | null = null;

  private skip: number = 0;
  private limit: number = 9;

  constructor(
    private collectService: CollectionService,
    private genusService: GenusService,
    private collectorService: CollectorService,
    private definedService: DefinedService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.genusService
      .loader()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((genuses: GenusType[]) => {
        this.genuses = genuses;
      });

    this.collectorService
      .loader()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((collectors: CollectorType[]) => {
        this.collectors = collectors;
      });

    this.definedService
      .loader()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((defineds: DefinedType[]) => {
        this.defineds = defineds;
      });

    this.spinnerService.showSpinner.next(true);
    this.collectService
      .loadInsects(this.skip, this.limit)
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((insectsData: InsectType[]) => {
        this.insects = insectsData;
        this.insectsFiltered = this.insects;
        this.spinnerService.showSpinner.next(false);
      });

    this.filerForm
      .get('genus')
      ?.valueChanges.pipe(takeUntil(this.$onDestroy))
      .subscribe((genus: GenusType | null) => {
        this.filter(genus);
      });

    this.filerForm
      .get('defineds')
      ?.valueChanges.pipe(takeUntil(this.$onDestroy))
      .subscribe((defined: DefinedType | null) => {
        this.filter(defined);
      });

    this.filerForm
      .get('collectors')
      ?.valueChanges.pipe(takeUntil(this.$onDestroy))
      .subscribe((collector: CollectorType | null) => {
        this.filter(collector);
      });
  }

  private filter(
    filterObj: GenusType | DefinedType | CollectorType | null
  ): void {
    if (!filterObj?._id) {
      this.insectsFiltered = [...this.insects];
      return;
    }
    this.insectsFiltered = this.insects.filter((insect: InsectType) => {
      return (
        insect.genus?._id === filterObj?._id ||
        insect.collector?._id === filterObj?._id ||
        insect.defined?._id === filterObj?._id
      );
    });
  }

  ngOnDestroy() {
    this.$onDestroy.next();
    this.$onDestroy.complete();
  }

  public loadMore(): void {
    this.spinnerService.showSpinner.next(true);
    if (!this.insects.length) {
      this.skip = 0;
    } else {
      this.skip = this.insects.length;
    }
    this.filerForm.reset();
    this.collectService
      .loadInsects(this.skip, this.limit)
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((insectsData: InsectType[]) => {
        this.disableMore = insectsData.length !== this.limit;
        this.insects.push(...insectsData);
        this.insectsFiltered.push(...insectsData);
        this.spinnerService.showSpinner.next(false);
      });
  }

  public showModal(insect: InsectType) {
    this.showModalTr = !this.showModalTr
    this.selectedIns = insect;
  }
}
