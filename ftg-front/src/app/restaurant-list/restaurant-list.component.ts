import { Observable } from 'rxjs';
import { Restaurant } from './../restaurant';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{

  constructor(private http: HttpClient,private router : Router) { }

  Object = Object;

  private baseUrl = "http://localhost:8080/restaurant/restaurantList";
  restaurants : Restaurant[] = [];
  getRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(`${this.baseUrl}`);
  }

  ngOnInit(): void {
    this.getRestaurants().subscribe((data: Restaurant[]) => {
      this.restaurants = data;
      console.log(this.restaurants);
    });

  }



}
