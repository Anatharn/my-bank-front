import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../domain/account/account';
import { HttpClient } from '@angular/common/http';
import { Response } from '../domain/hal/response';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Response<Account>>{
    return this.httpClient.get<Response<Account>>("/api/mybank/accounts")
  }
  findByUrl(url: string): Observable<Account> {
    return this.httpClient.get<Account>(url)
  }
}
