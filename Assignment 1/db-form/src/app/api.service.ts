import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRecords(table: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${table}`);
  }

  getRecordById(table: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${table}/${id}`);
  }

  createRecord(table: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${table}`, data);
  }

  updateRecord(table: string, id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${table}/${id}`, data);
  }

  deleteRecord(table: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${table}/${id}`);
  }
}
