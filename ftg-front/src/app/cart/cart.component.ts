import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public dishes : any=[];
  public finalTotal : number = 0;

  constructor(private cartService : CartService){}

  ngOnInit(): void {
    this.cartService.getDishes()
    .subscribe(res =>{
      this.dishes = res;
      this.finalTotal = this.cartService.getTotalPrice();
    })
  }

  addToCart(dish: any)
  {
    this.cartService.addToCart(dish);
  }

  removeDish(dish :any)
  {
    this.cartService.removeCartDish(dish);
    this.finalTotal = this.cartService.getTotalPrice();

  }

  emptyCart()
  {
    this.cartService.emptyCart();
  }


}
