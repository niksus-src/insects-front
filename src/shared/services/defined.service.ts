import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {api} from "../env/api";
import {DefinedType} from "../types/defined.type";

@Injectable()
export class DefinedService {
  constructor(private httpService: HttpClient) {}

  public loader(): Observable<DefinedType[]> {
    return this.httpService.get<DefinedType[]>(api + '/defineds');
  }

  public delete(id: string): Observable<any> {
    return this.httpService.delete(api + '/defineds/' + id)
  }

  public add(name: string): Observable<any> {
    return this.httpService.post(api + '/defineds', { name: name });
  }
}
