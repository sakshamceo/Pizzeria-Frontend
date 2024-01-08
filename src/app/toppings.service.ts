import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {
  private apiUrl = 'https://cute-puce-angler-kit.cyclic.app/BuildPizza';
  constructor(private http: HttpClient) { }
  getToppings(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  
}
