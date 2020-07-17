import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URLS } from '../assets/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProduct(product:string): Observable<any> {
    return this.http.get<any>(`${URLS.walmartProductSearch}?storeId=3748&query=${product}`);
  }
}
