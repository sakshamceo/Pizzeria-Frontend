import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn:boolean=false;
  name:string="";
  //use an Observable to notify subscribers (like your Navbar component) when the name changes.
  private apiUrl = 'http://localhost:3002/login'; 
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post( this.apiUrl, {username, password });
  }
}
