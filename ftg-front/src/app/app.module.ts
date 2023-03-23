import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GetUserComponent } from './get-user/get-user.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    GetUserComponent,
    AddUserComponent,
    NavigationBarComponent,
    RestaurantListComponent,
    RegisterRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
