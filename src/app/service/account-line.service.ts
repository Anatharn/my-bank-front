import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccountLine } from '../domain/account/account-line';
import { HttpClient } from '@angular/common/http';
import { Response } from '../domain/hal/response';
import { PageEvent } from '@angular/material/paginator';
import { Account, SumAccount } from '../domain/account/account';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root'
})
export class AccountLineService {

  private BASE_URL: string = "/api/mybank/account-lines"

  constructor(private httpClient: HttpClient) { }

  findByAccount(account: Account, pageIndex: Number = 0, pageSize: Number = 5): Observable<Response<AccountLine>> {
    let url = `${this.BASE_URL}/search/findByAccount?account=${Utils.convertUrl(account._links.self.href)}&page=${pageIndex}&size=${pageSize}&sort=date,desc`;
    console.log(url)
    return this.httpClient.get<Response<AccountLine>>(url)
  }
  sumAccountLinesByAccount(account: Account): Observable<SumAccount> {
    return this.httpClient.get<SumAccount>(account._links.self.href + "?projection=sumAccount")
  }
  findByUrl(url: string, pageEvent: PageEvent) : Observable<Response<AccountLine>> {
    let updatedURL = url + "?page=" + pageEvent.pageIndex + "&size=" + pageEvent.pageSize;
    console.log(updatedURL)
    return this.httpClient.get<Response<AccountLine>>(updatedURL)
  }

  create(accountLine: AccountLine): Observable<AccountLine>{
    return this.httpClient.post<AccountLine>(this.BASE_URL, accountLine)
  }

  delete(accountLine: AccountLine): Observable<AccountLine> {
    return this.httpClient.delete<AccountLine>(accountLine._links.self.href)
  }
}
