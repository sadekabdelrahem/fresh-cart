import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlistProductId = new BehaviorSubject<string[]>([])

  constructor(private _HttpClient:HttpClient) {
    this.getUserToWishList().subscribe({
      next:(response)=>{console.log(response); 
        this.wishlistProductId.next((response.data as Iproduct[]).map((product)=>product._id))
      },
      error:(err)=>{console.log(err)
      }
    });
  }


  addProductToWishList(productId:string):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist` , 
      {
        productId:productId
      }
    )
  }

  getUserToWishList():Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist` )
  }

  removeProductFromWishList(productId:string):Observable<any>
  {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}` )
  }
}
