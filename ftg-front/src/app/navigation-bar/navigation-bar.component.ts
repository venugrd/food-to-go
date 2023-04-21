import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit{

  username!: string;
  menuType:String ="default";
  userName = sessionStorage.getItem("username");

  public cartQuantity : number = 0;
  constructor(private router : Router,private cartService : CartService) { }

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

    this.cartService.getDishes()
    .subscribe(res=>{
        this.cartQuantity = res.length;
    });
  }



  logout()
  {
    sessionStorage.removeItem("username");
    console.log("logged out");
    this.router.navigateByUrl('/getUser')
  }

}
