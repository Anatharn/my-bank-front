import { Injectable } from '@angular/core';
import { Observable, mergeMap } from 'rxjs';
import { Account } from '../domain/account/account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../domain/hal/response';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private BASE_URL: string = "/api/mybank/accounts"

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Response<Account>>{
    return this.httpClient.get<Response<Account>>(this.BASE_URL)
  }
  findByUrl(url: string): Observable<Account> {
    return this.httpClient.get<Account>(url)
  }
  create(account: Account): Observable<Account> {
    console.log("create", account)
    return this.httpClient.post<Account>(this.BASE_URL, account)
  }
  delete(account: Account): Observable<Account> {
    return this.httpClient.delete<Account>(account._links.self.href)
  }
  update(account: Account): Observable<Account> {
    console.log('update account', account)
    let httpHeaders = new HttpHeaders({'Content-Type': 'text/uri-list'})
    return this.httpClient.put<Account>(account._links.self.href, account).pipe(
      mergeMap(() => {
        return this.httpClient.put<any>(account._links['bank'].href, account.bank, {'headers': httpHeaders})
      }),
      mergeMap(() => {
        return this.httpClient.put<any>(account._links['category'].href, account.category, {'headers': httpHeaders})
      })
    )
  }
}
