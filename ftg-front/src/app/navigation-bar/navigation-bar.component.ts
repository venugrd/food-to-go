import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit{

  username!: string;
  menuType:String ="default";
  userName = sessionStorage.getItem("username");

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val :any) =>
    {
      if(sessionStorage.getItem("username"))
      {
        this.menuType="logged";
        console.log(this.userName);
      }
      else
        this.menuType='default';
    });
  }



  logout()
  {
    sessionStorage.removeItem("username");
    console.log("logged out");
    this.router.navigateByUrl('/getUser')
  }

}
