import { Component,OnInit } from '@angular/core';
import {OrderService } from 'src/app/order.service'
import { Pizza } from '../pizza.model';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  pizzas: any[] = [];
  quantity: number[]=[];
  constructor(private orderService: OrderService, private cartService: CartService, private ls :  LoginService ) {}
  
  ngOnInit(): void {
    this.orderService.getPizzas().subscribe(
      (data) => {
        this.pizzas = data;
        this.quantity=Array(data.length).fill(0)
      },
      (error) => {
        console.error('Error fetching pizzas:', error);
      }
    );
}

increase(index: number): void {
  this.quantity[index] = this.quantity[index] + 1;
}
decrease(index: number): void {
  if (this.quantity[index] > 0) {
    this.quantity[index]--;
  }
}
AddToCart(qt:number,pizza:Pizza):void
{ //quantity
  pizza.quantity = this.quantity[qt];
  this.cartService.addToCart(pizza);
  Swal.fire('🍕 Added To Cart');
}

}
