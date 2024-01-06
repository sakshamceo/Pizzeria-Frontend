import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CartService } from './cart.service';
import { Pizza } from './pizza.model';
import { Final } from './finalorder.model';

describe('CartService', () => {
  let cartService: CartService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService]
    });

    cartService = TestBed.inject(CartService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });

  it('should add pizza to cart', () => {
    const pizza: Pizza = { id: '001',type:'veg',price: 10, name: 'Paneer Tikka', image:'https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg',description:'This is popular italian pizza flavoured with marinated tikka sauce and paneer', ingredients :['mustard','cheese'], topping:[] , quantity:1} ;
    cartService.addToCart(pizza);
    const items = cartService.getItems();
    expect(items.length).toBe(1);
    expect(items[0]).toEqual(pizza);
  });

  it('should add topping to cart', () => {
    const topping = { name: 'Pepperoni', price: 110 , image:'https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolated-on-white-with-path-shot-from-above-161642033.jpg' };
    cartService.addToppCart(topping);
    const toppings = cartService.toppings;
    expect(toppings.length).toBe(1);
    expect(toppings[0]).toEqual(topping);
  });

  it('should calculate total', () => {
    const pizza: Pizza = {id: '001',type:'veg',price: 10, name: 'Paneer Tikka', image:'https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg',description:'This is popular italian pizza flavoured with marinated tikka sauce and paneer', ingredients :['mustard','cheese'], topping:[] , quantity:0};
    const topping = { name: 'Pepperoni', price: 110 , image:'https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolated-on-white-with-path-shot-from-above-161642033.jpg' };
    cartService.addToCart(pizza);
    cartService.addToppCart(topping);
    cartService.getTotal();
    expect(cartService.total).toEqual(120); 
  });

});
