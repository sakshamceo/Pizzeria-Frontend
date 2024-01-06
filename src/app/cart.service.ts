import { Injectable } from '@angular/core';
import { Pizza } from './pizza.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Final } from './finalorder.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  total:number=0;
  cart:Pizza[]=[];
  toppings:any[]=[];

addToCart(pizza :Pizza)
{
  this.cart.push(pizza);
  this.getTotal();
}
addToppCart(top :any)
{
  this.toppings.push(top);
  console.log(this.toppings);
}
getTotal()
 {
    this.total=0;
    //pizza sbtotal
    for(const item of this.cart)
    {
      if(item.quantity==0)
      {
        item.quantity=1;
      } 
      this.total += Number(item.quantity) * Number(item.price);
    }
    //topping sbtotal
    for(const item of this.toppings)
    {
      this.total += Number(item.price);
    }
}
  getItems()
  {
    return this.cart;
  }
  constructor(private http: HttpClient) { }
  sendOrder(order: Final): Observable<any> {
    const apiUrl = 'http://localhost:3002/send';
    return this.http.post(apiUrl, order);
  }
}
