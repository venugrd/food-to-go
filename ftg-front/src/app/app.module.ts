import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GetUserComponent } from './get-user/get-user.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import { RestaurantDishesComponent } from './restaurant-dishes/restaurant-dishes.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { AddDishComponent } from './add-dish/add-dish.component';
import { EditDishComponent } from './edit-dish/edit-dish.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    GetUserComponent,
    AddUserComponent,
    NavigationBarComponent,
    RestaurantListComponent,
    RegisterRestaurantComponent,
    RestaurantDishesComponent,
    HomeComponent,
    AddDishComponent,
    EditDishComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BreadcrumbModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
