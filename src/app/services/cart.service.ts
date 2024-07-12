import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  isInWishList:Iproduct[]=[]

  constructor(private HttpClient:HttpClient) {
    this.getUserCart().subscribe({
      next:(response)=>{this.cartItemNum.next(response.numOfCartItems)}
    })
  };

  headers:any = {token:localStorage.getItem('token')};

  cartItemNum = new BehaviorSubject<number>(0)

  addCartItem(id:string):Observable<any>
    {
      return this.HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart" , 
        {productId :id},)
    }
    
    getUserCart():Observable<any>
    {
      return this.HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart",)
    }

    removeCartItem(id:string):Observable<any>
    {
      return this.HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`)
    }

    updateCartItem(id:string, count:number):Observable<any>
    {
      return this.HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {count:count})
    }

    onlinePayment(cartId:any , shippingAddress:any):Observable<any>
    {
      return this.HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200` , 
        {shippingAddress:shippingAddress}
      )
    }
  
}
