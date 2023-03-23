import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  username!: string;
  userName = sessionStorage.getItem("username");

  constructor(private router : Router) { }

  logout()
  {
    sessionStorage.removeItem("username");
    console.log("logged out");
    this.router.navigateByUrl('/getUser')
  }

}
