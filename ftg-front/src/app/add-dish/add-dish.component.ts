import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css'],
})
export class AddDishComponent {
  dish = {
    dishName: '',
    restaurant_id: '',
    description: '',
    price: '',
    serving: '',
    cuisine: '',
  };

  dishdto = {
    dish: '',
    file: '',
  };

  id: any;
  constructor(private http: HttpClient, private router: ActivatedRoute) {}

  private baseUrl = 'http://localhost:8080/dish/add';

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  postDish(fd: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}`, fd
    // ,{headers:{'Content-Type': 'multipart/form-data'}}
    );
  }

  fd = new FormData();

  details: string = '';

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

    this.postDish(this.fd).subscribe(
      () => {
        this.details = 'Dish added';
        f.reset();
      },
      (error) => {
        this.details = 'Error';
      }
    );
    console.log(this.fd);
    this.fd= new FormData;
  }
}
