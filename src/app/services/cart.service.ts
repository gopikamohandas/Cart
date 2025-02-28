import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] =[];

  constructor() { }

  addToCart(product: any){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  delete(item: any){
    this.items = this.items.filter((i)=> i.id !== item.id)
  }
}
