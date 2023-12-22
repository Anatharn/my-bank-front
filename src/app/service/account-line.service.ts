import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccountLine } from '../domain/account/account-line';
import { HttpClient } from '@angular/common/http';
import { Response } from '../domain/hal/response';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class AccountLineService {

 private  BASE_URL: string = "/api/mybank/account-lines"

  constructor(private httpClient: HttpClient) { }

  findByAccountId(accountId: Number, pageIndex: Number = 0, pageSize: Number = 5): Observable<Response<AccountLine>> {
    let url = this.BASE_URL + "/search/findByAccountId?id=" + accountId + "&page=" + pageIndex + "&size=" + pageSize;
    console.log(url)
    return this.httpClient.get<Response<AccountLine>>(url)
  }

  findByUrl(url: string, pageEvent: PageEvent) : Observable<Response<AccountLine>> {
    let updatedURL = url + "?page=" + pageEvent.pageIndex + "&size=" + pageEvent.pageSize;
    console.log(updatedURL)
    return this.httpClient.get<Response<AccountLine>>(updatedURL)
  }

  add(accountLine: AccountLine): Observable<AccountLine>{
    return this.httpClient.post<AccountLine>(this.BASE_URL, accountLine)
  }

  delete(accountLine: AccountLine): Observable<AccountLine> {
    return this.httpClient.delete<AccountLine>(accountLine._links.self.href)
  }
}
