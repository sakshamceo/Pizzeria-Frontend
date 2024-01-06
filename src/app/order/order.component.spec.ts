import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'
import { OrderComponent } from './order.component';
import { OrderService } from '../order.service';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let orderService: OrderService;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderComponent],
      imports:[HttpClientModule],
      providers:[OrderService],
    });
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    orderService = TestBed.inject(OrderService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment quantity', () => {
    const index = 0;
    component.quantity = [0];
    component.increase(index);
    expect(component.quantity[index]).toBe(1);
  });
  
  it('should increment another quantity', () => {
    const index = 1;
    component.quantity = [2,3,2];
    component.increase(index);
    expect(component.quantity[index]).toBe(4);
  });
  it('should decrement quantity', () => {
    const index = 0;
    component.quantity = [2];
    component.decrease(index);
    expect(component.quantity[index]).toBe(1);
  });
  
  

  
});
