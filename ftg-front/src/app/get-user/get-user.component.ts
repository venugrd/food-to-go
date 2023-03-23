import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-form',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
ngOnInit(){
}
private baseUrl = "http://localhost:8080/users/getusers";

constructor(private http: HttpClient,private router : Router) { }

getUsers(email: string): Observable<User[]>{
  return this.http.get<User[]>(`${this.baseUrl}`+"?email="+email);
}

  user: any = [];
  details: string ="";
onClickSubmit(result: { email: string; }) {
  this.getUsers(result.email).subscribe((data: User[]) => {
    this.user = data;
    type ObjectKey = keyof typeof this.user;
    const myVar = 'name' as ObjectKey;
    this.details = JSON.stringify(this.user);
    sessionStorage.setItem("username",this.user.name);
    console.log(this.user.name)
    this.router.navigateByUrl('/restaurants')
  });
}

}
