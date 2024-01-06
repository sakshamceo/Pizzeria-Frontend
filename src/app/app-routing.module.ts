import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import{DashboardComponent} from 'src/app/dashboard/dashboard.component'
import { CartComponent } from './cart/cart.component';
import { ToppingsComponent } from './toppings/toppings.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'orderpizza',component:OrderComponent},
  {path:'Cart',component: CartComponent },
  {path:'Toppings',component:ToppingsComponent},
  {path:'Login',component:LoginComponent},
  {path:'**',component:DashboardComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
