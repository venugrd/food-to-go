import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Dish } from './../dish';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css']
})
export class EditDishComponent {

  id: any;
  dish = {
    dishId:'',
    dishName: '',
    restaurant_id: '',
    description: '',
    price: '',
    serving: '',
    cuisine: '',
    imgURL:'',
  };

  dishdto = {
    dish: '',
    file: '',
  };

  fd = new FormData();
  details: string | undefined;

  private baseUrl = "http://localhost:8080/restaurant/";


  constructor(private http: HttpClient,private router : ActivatedRoute) { }

  dishes : Dish[] =[]

  getDishes(): Observable<Dish[]>{
    return this.http.get<Dish[]>(`${this.baseUrl}`+this.id+`/dishes`);
  }

  updateDish(fd: any){
    return this.http.post("http://localhost:8080/dish/update", fd);
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
     this.id = params['id'];
     });
     this.getDishes().subscribe((data: Dish[]) => {
      this.dishes = data;
      console.log(this.dishes);
    });
   }

   getDish(dish : any)
   {
    this.dish = dish;
   }

   deleteDish()
   {
    if(this.dish.dishId)
    {
      this.http.delete("http://localhost:8080/dish/delete/"+this.dish.dishId).subscribe();
      console.log("Deleting "+this.dish.dishId);
    }
   }


   onFileSelected(event:any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fd.append('file', file);
    }
  }

   onClickSubmit(f: NgForm) {

    this.dish = f.value;
    this.dish.restaurant_id = this.id;
    const blobOverrides = new Blob([JSON.stringify(this.dish)], {
      type: 'application/json',
    });

    this.fd.append('dto', blobOverrides);

    this.updateDish(this.fd).subscribe(
      () => {
        this.details = 'Dish updated';
        console.log(this.dish);
        f.reset();
        this.ngOnInit();
      },
      (error) => {
        this.details = 'Error';
      }
    );
    console.log(this.fd);
    this.fd= new FormData;
  }

}
