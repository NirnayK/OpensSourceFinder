import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseData } from './base-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getTags(): Observable<BaseData[]> {
    return this.http.get<BaseData[]>(this.APIUrl + '/tags');
  }

  getLanguages(): Observable<BaseData[]> {
    return this.http.get<BaseData[]>(this.APIUrl + '/languages');
  }

  getLicenses(): Observable<BaseData[]> {
    return this.http.get<BaseData[]>(this.APIUrl + '/licenses');
  }
}
