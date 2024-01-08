import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://cute-puce-angler-kit.cyclic.app/OrderPizza';
  constructor(private http: HttpClient) { }
  getPizzas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
