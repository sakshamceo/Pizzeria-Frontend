import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'
import { CartComponent } from './cart.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../cart.service';
import { Pizza } from '../pizza.model';
import { LoginService } from '../login.service';
import { Final } from '../finalorder.model';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartservice: CartService;
  let Loginservice: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent,NavbarComponent],
      imports :[HttpClientModule],
      providers:[CartService,LoginService],
    });
    cartservice = TestBed.inject(CartService);
    Loginservice=TestBed.inject(LoginService);
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


it('more than  1 item should empty cart', ()=>{
    const pizza: Pizza = { id: '001',type:'veg',price: 10, name: 'Paneer Tikka', image:'https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg',description:'This is popular italian pizza flavoured with marinated tikka sauce and paneer', ingredients :['mustard','cheese'], topping:[] , quantity:1} ;
    cartservice.addToCart(pizza);
    component.remove(pizza);
    expect(pizza.quantity).toBe(0);
  });
it('0 item should empty cart', ()=>{
    const pizza: Pizza = { id: '001',type:'veg',price: 10, name: 'Paneer Tikka', image:'https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg',description:'This is popular italian pizza flavoured with marinated tikka sauce and paneer', ingredients :['mustard','cheese'], topping:[] , quantity:0} ;
    cartservice.addToCart(pizza);
    component.remove(pizza);
    expect(cartservice.cart).toEqual([]);
  });
it('should remove topping', () => {
  const initialTotal = 200; 
  const toppingToRemove = {
    name: 'Pepperoni',
    price: 110,
    image: 'https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolated-on-white-with-path-shot-from-above-161642033.jpg',
  };
  component.toppings = [toppingToRemove];
  component.total = initialTotal;
  component.removeTopp(toppingToRemove);
  expect(component.toppings).toEqual([]);
  expect(component.total).toBe(initialTotal - toppingToRemove.price);
});
it('should add toppings to pizzas', () => {
  const pizza1: Pizza = { 
    id: '001',
    type: 'veg',
    price: 10,
    name: 'Paneer Tikka',
    image: 'https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg',
    description: 'This is a popular Italian pizza flavored with marinated tikka sauce and paneer',
    ingredients: ['mustard', 'cheese'],
    topping: [],
    quantity: 1
  };

  const topping = [{
    id: 102,
    tname: 'Pepperoni',
    price: 110,
    image: 'https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolated-on-white-with-path-shot-from-above-161642033.jpg',
  }];

  cartservice.addToCart(pizza1);
  cartservice.addToppCart(topping);
  component.signnow();
  component.paynow();
  expect(topping.some((topping: { tname: string; }) => topping.tname === 'Pepperoni')).toBe(true);
});


});
