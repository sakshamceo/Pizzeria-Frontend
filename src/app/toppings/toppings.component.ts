import { Component , OnInit } from '@angular/core';
import { ToppingsService } from '../toppings.service';
import { CartService } from '../cart.service';
import { Pizza } from '../pizza.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.css']
})
export class ToppingsComponent {
  top: any[] = [];
  cartItems:any[ ] = [];
  constructor(private toppings : ToppingsService, private cartservice : CartService){}
  ngOnInit(): void {
    this.toppings.getToppings().subscribe(
      (data) => {
        this.top = data;
       this.cartItems=this.cartservice.cart
        console.log(this.top)
      },
      (error) => {
        console.error('Error fetching pizzas:', error);
      }
    );
}
addTop(topp:any){
  this.cartservice.addToppCart(topp);
  Swal.fire("Toppings Added To Cart")
  return this.top;
}
}
