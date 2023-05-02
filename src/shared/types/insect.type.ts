import { GenusType } from './genus.type';
import { RegionType } from './region.type';
import { DistrictType } from './district.type';
import { BindingsType } from './bindings.type';
import { CollectorType } from './collector.type';
import { DefinedType } from './defined.type';

export class InsectType {
  constructor() {
    this._id = '';
    this.genus = new GenusType();
    this.img = '';
    this.region = new RegionType();
    this.destrict = new DistrictType();
    this.binding = new BindingsType();
    this.correctBind = '';
    this.bioType = '';
    this.collector = new CollectorType();
    this.defined = new DefinedType();
    this.storage = '';
    this.dateCollect = '';
  }

  public _id: string = '';
  public genus: GenusType = new GenusType();
  public img: string = '';
  public region: RegionType = new RegionType();
  public destrict: DistrictType = new DistrictType();
  public binding: BindingsType = new BindingsType();
  public correctBind: string = '';
  public bioType: string = '';
  public collector: CollectorType = new CollectorType();
  public defined: DefinedType = new DefinedType();
  public storage: string = '';
  public dateCollect: string = '';
}
