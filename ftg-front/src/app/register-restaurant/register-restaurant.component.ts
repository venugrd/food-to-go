import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { Observable, delay } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent {

  private baseUrl = "http://localhost:8080/restaurant/register";

  constructor(private http: HttpClient,private router : Router) { }

  postRestaurant(restaurant :Restaurant): Observable<Restaurant[]>{
    return this.http.post<Restaurant[]>(`${this.baseUrl}`,restaurant);
  }

  move()
  {
    this.router.navigateByUrl('/restaurants');
  }

  user: Restaurant[] = [];
    details: string ="";
  onClickSubmit(f :NgForm) {
    this.postRestaurant(f.value)
    .subscribe((data: Restaurant[]) => {
      this.user = data;
      this.details = "Restaurant Successfully Registered";
      f.reset();
      setTimeout(() => {this.move}, 3000);
    },
    (error) =>{
      this.details ="Duplicate email";
    });

  }
}
