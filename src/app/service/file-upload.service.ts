import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private baseUrl = '/api/operation/upload-file';

  constructor(private http: HttpClient) { }

  upload(file: File, accountUrl: string): Observable<Object> {
    const formData: FormData = new FormData()

    formData.append('file', file)
    //formData.append('accountId', accountId.toString())
    formData.append('url', Utils.convertUrl(accountUrl))

    return this.http.post(this.baseUrl, formData)
  }
}
