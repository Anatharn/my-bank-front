import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../domain/category/category';
import { HttpClient } from '@angular/common/http';
import { Response } from '../domain/hal/response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private BASE_URL: string = "/api/mybank/categories"

  constructor(private httpClient: HttpClient) { }

  findOne(link: string): Observable<Category> {
    return this.httpClient.get<Category>(link)
  }
  findAll() : Observable<Response<Category>> {
    return this.httpClient.get<Response<Category>>(this.BASE_URL)
  }
  create(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.BASE_URL, category)
  }
  delete(category: Category): Observable<Category> {
    return this.httpClient.delete<Category>(category._links.self.href);
  }
}
