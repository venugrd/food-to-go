import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Dish } from './../dish';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-restaurant-dishes',
  templateUrl: './restaurant-dishes.component.html',
  styleUrls: ['./restaurant-dishes.component.css']
})
export class RestaurantDishesComponent {
  id: any;
  private baseUrl = "http://localhost:8080/restaurant/";
  dishes : Dish[] =[]

  getDishes(): Observable<Dish[]>{
    return this.http.get<Dish[]>(`${this.baseUrl}`+this.id+`/dishes`);
  }


  constructor(private http: HttpClient,private router : ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
     this.id = params['id'];
     });
     this.getDishes().subscribe((data: Dish[]) => {
      this.dishes = data;
      console.log(this.dishes);
    });
   }

   hideParent()
   {
    const div =document.getElementById("dishes");
    if(div)
      div.style.display='none'
   }

}
