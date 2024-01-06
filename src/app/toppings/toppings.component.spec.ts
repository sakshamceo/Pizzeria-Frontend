import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'
import { ToppingsComponent } from './toppings.component';
import { CartService } from '../cart.service';

describe('ToppingsComponent', () => {
  let component: ToppingsComponent;
  let cartservice:CartService;
  let fixture: ComponentFixture<ToppingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToppingsComponent],
      imports:[HttpClientModule],
      providers:[CartService],
    });
    cartservice = TestBed.inject(CartService);
    fixture = TestBed.createComponent(ToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should add toppings", () => {
    const topp = {
      name: 'Pepperoni',
      price: 110,
      image: 'https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolated-on-white-with-path-shot-from-above-161642033.jpg',
    };
    component.addTop(topp);
    expect(cartservice.toppings.length).toBe(1);
  });
});
