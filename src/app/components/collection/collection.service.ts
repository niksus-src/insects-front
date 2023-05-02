import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsectType } from '../../../shared/types/insect.type';
import { api } from '../../../shared/env/api';

@Injectable()
export class CollectionService {
  constructor(private httpService: HttpClient) {}

  public loadInsects(skip: number, limit: number): Observable<InsectType[]> {
    return this.httpService.get<InsectType[]>(api + '/insects', {
      params: {
        skip: skip,
        limit: limit,
      },
    });
  }
}
