import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {
  private dataUrl = 'assets/json/dashboard.json'

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.dataUrl);
  }
}
