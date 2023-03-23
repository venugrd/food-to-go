import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { User } from '../user';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  private baseUrl = "http://localhost:8080/users/registeruser";

  constructor(private http: HttpClient,private router : Router) { }

  getUsers(user :User): Observable<User[]>{
    return this.http.post<User[]>(`${this.baseUrl}`,user);
  }

  move()
  {
    this.router.navigateByUrl('/getUser');
  }

    user: User[] = [];
    details: string ="";
  onClickSubmit(f :NgForm) {
    this.getUsers(f.value)
    .subscribe((data: User[]) => {
      this.user = data;
      this.details = "Successfully Registered";
      f.reset();
      setTimeout(() => {this.move}, 3000);
    },
    (error) =>{
      this.details ="Duplicate email";
    });

  }

  }
