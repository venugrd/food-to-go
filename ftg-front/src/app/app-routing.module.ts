import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { GetUserComponent } from './get-user/get-user.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
const routes: Routes = [
  { path: 'getUser', component: GetUserComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'registerRestaurant', component: RegisterRestaurantComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
