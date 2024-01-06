import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3002/OrderPizza';
  constructor(private http: HttpClient) { }
  getPizzas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
