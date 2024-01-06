import { Component , OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Pizza } from '../pizza.model';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import Swal from 'sweetalert2';
import{Final} from '../finalorder.model'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:Pizza[] = [];
  toppings:any[]=[];
  total: number=0;
  quantity:number=0;
  login:boolean=false;
  abc:string="";
  Finalorder:Final[]=[];
  constructor(private cartService: CartService, private ls :LoginService) {this.login=this.ls.isLoggedIn;};
  ngOnInit(): void {
    this.cartItems=this.cartService.cart;
    this.toppings=this.cartService.toppings;
    
    this.cartService.getTotal();
    this.total=this.cartService.total;
  }
  remove(pizza:any){
  if(pizza.quantity!=0)
  {
    pizza.quantity=pizza.quantity-1;
    this.total = this.total-pizza.price;
  }
  if(pizza.quantity==0)
  {
  const index = this.cartItems.indexOf(pizza);
  if (index !== -1) {
    this.cartItems.splice(index, 1);
    this.cartItems = this.cartItems.filter((pizza) => pizza.quantity !== -1);
    }
  }
  }
 removeTopp(topp:any)
 {
   const index = this.toppings.indexOf(topp);
   if (index !== -1) {
    this.toppings.splice(index, 1);
    this.total = this.total-topp.price;
    }
  }
 signnow()
 {
  this.cartItems.forEach(pizza => {
    pizza.topping = [...this.toppings]; 
  });
  console.log(this.cartItems)
 }
 paynow(){
  this.cartItems.forEach(pizza => {
    pizza.topping = [...this.toppings]; 
  });
  
  const order: Final = {
    name: this.ls.name,
    order: this.cartItems,
    subtotal: this.cartService.total
  };
   this.sendOrderToServer(order);
 Swal.fire("Payement Done ✅");
 }
 sendOrderToServer(order: Final): void {
  this.cartService.sendOrder(order).subscribe(
    (response) => {
      console.log('Order sent successfully', response);
    },
    (error) => {
      console.error('Error sending order', error);
    }
  );
}
}