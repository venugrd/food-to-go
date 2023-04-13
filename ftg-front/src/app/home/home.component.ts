import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  component : String = "login";
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val :any) =>
    {
      if(sessionStorage.getItem("username"))
      {
        this.component = "restaurants";
      }
      else
      this.component = "login";

    });
  }

}
