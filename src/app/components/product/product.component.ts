import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _CartService:CartService , private _ToastrService:ToastrService , private _WishlistService:WishlistService){}

  @Input() product!:Iproduct

  wishlistProductIds:string[]=[]


  ngOnInit(): void {
    this._WishlistService.wishlistProductId.subscribe((idsList)=>{this.wishlistProductIds = idsList})
  }

isLoading:boolean=false

  addToCart(id:string)
  {
    this.isLoading=true;
    this._CartService.addCartItem(id).subscribe({
      next:(response)=>{console.log(response);
        this.isLoading=false;
        this._CartService.cartItemNum.next(response.numOfCartItems);
        this._ToastrService.info('successfully add to cart!', 'product Added!' , {
            closeButton:true,
            timeOut:3000
        });
      },
      error:(err)=>{console.log(err);
        this.isLoading=false
      }
    })
  }

  addToWishList(productId:string)
  {
    this._WishlistService.addProductToWishList(productId).subscribe({
      next:(response)=>{console.log(response);
        this._WishlistService.wishlistProductId.next(response.data);
        this._ToastrService.info('successfully add to cart!', 'product Added!' , {
          closeButton:true,
          timeOut:3000
      });
      },
      
      error:(err)=>{console.log(err)}
      
    })
    console.log(productId)
  }

isWishlistProduct(id:string)
{
  return this.wishlistProductIds.includes(id)
}


}
