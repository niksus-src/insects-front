import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenusType } from '../types/genus.type';
import { api } from '../env/api';

@Injectable()
export class GenusService {
  constructor(private httpService: HttpClient) {}

  public loader(): Observable<GenusType[]> {
    return this.httpService.get<GenusType[]>(api + '/genus');
  }

  public delete(id: string): Observable<any> {
    return this.httpService.delete(api + '/genus/' + id);
  }

  public add(name: string): Observable<any> {
    return this.httpService.post(api + '/genus', { name });
  }
}
