import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartList: any = [];
  public dishList = new BehaviorSubject<any>([]);

  constructor() {}

  getDishes() {
    return this.dishList.asObservable();
  }

  setDish(dish: any) {
    this.cartList.push(...dish);
    this.dishList.next(dish);
  }

  addToCart(dish: any) {
    let f = false;
    if (this.cartList.length != 0) {
      this.cartList.map((a: any) => {
        if (dish.id == a.id) {
          a.quantity += 1;
          a.total = a.price * a.quantity;
          f = true;
        }
      });
      if (f == false) {
        this.cartList.push(dish);
      }
    } else this.cartList.push(dish);
    this.dishList.next(this.cartList);
    this.getTotalPrice();
    console.log(this.cartList);
  }
  getTotalPrice(): number {
    let finalTotal = 0;

    this.cartList.map((a: any) => {
      finalTotal += a.total;
    });

    return finalTotal;
  }

  removeCartDish(dish: any) {
    this.cartList.map((a: any, index: any) => {
      if (dish.id === a.id) {
        if (a.quantity > 1) {
          a.quantity -= 1;
          a.total = a.quantity * a.price;
        } else this.cartList.splice(index, 1);
      }
    });
    this.dishList.next(this.cartList);
  }

  emptyCart() {
    this.cartList = [];
    this.dishList.next(this.cartList);
  }
}
