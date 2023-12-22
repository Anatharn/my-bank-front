import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../domain/bank/bank';
import { HttpClient } from '@angular/common/http';
import { Response } from '../domain/hal/response';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private BASE_URL: string = "/api/mybank/banks"

  constructor(private httpClient: HttpClient) { }

  findOne(link: string): Observable<Bank>{
    return this.httpClient.get<Bank>(link)
  }
  findAll(): Observable<Response<Bank>> {
    return this.httpClient.get<Response<Bank>>(this.BASE_URL)
  }
  create(bank: Bank): Observable<Bank> {
    return this.httpClient.post<Bank>(this.BASE_URL, bank)
  }
}
