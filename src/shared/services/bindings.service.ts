import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {api} from "../env/api";
import {BindingsType} from "../types/bindings.type";

@Injectable()
export class BindingsService {
  constructor(private httpService: HttpClient) {}

  public loader(): Observable<BindingsType[]> {
    return this.httpService.get<BindingsType[]>(api + '/bindings');
  }

  public delete(id: string): Observable<any> {
    return this.httpService.delete(api + '/bindings/' + id)
  }

  public add(name: string): Observable<any> {
    return this.httpService.post(api + '/bindings', { name: name });
  }
}
