import { HomeComponent } from './home/home.component';
import { RestaurantDishesComponent } from './restaurant-dishes/restaurant-dishes.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { GetUserComponent } from './get-user/get-user.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { EditDishComponent } from './edit-dish/edit-dish.component';

const routes: Routes = [
  { path: 'getUser', component: GetUserComponent,data: { breadcrumb: 'Login'}},
  { path: 'addUser', component: AddUserComponent,data: { breadcrumb: 'Sign Up'}},
  { path: 'restaurants', component: RestaurantListComponent,data: { breadcrumb: 'Restaurants'} },
  { path: 'registerRestaurant', component: RegisterRestaurantComponent },
  {path: 'restaurant/:id', component: RestaurantDishesComponent, data: { breadcrumb: 'Dishes'},
          children:[
            {path: 'addDish', component: AddDishComponent,data: { breadcrumb: 'Add Dish'}},
            {path: 'editDish', component: EditDishComponent, data: { breadcrumb: 'Edit Dishes'}}
          ]
  },
  {path: 'addDish/:id', component: AddDishComponent},
  {path: 'editDish/:id', component: EditDishComponent},
  {path: "", component: HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
