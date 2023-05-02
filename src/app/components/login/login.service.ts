import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserType} from "../../../shared/types/user.type";
import {api} from "../../../shared/env/api";
import {Observable} from "rxjs";
import {ResultLogin} from "../../../shared/types/result.type";

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(data: UserType): Observable<ResultLogin> {
    return this.httpClient.post<ResultLogin>(  api + '/users/login', data);
  }
}
