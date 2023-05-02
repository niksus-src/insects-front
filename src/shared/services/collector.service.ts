import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../env/api';
import { CollectorType } from '../types/collector.type';

@Injectable()
export class CollectorService {
  constructor(private httpService: HttpClient) {}

  public loader(): Observable<CollectorType[]> {
    return this.httpService.get<CollectorType[]>(api + '/collector');
  }

  public delete(id: string): Observable<any> {
    return this.httpService.delete(api + '/collector/' + id)
  }

  public add(name: string): Observable<any> {
    return this.httpService.post(api + '/collector', { name: name });
  }
}
