import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor(private _WishlistService:WishlistService , private _ToastrService:ToastrService , private _CartService:CartService){}

  allWishListProduct:Iproduct [] = []
  isLoadingCart:boolean = false;

  ngOnInit(): void {
    this.isLoadingCart=true
    this.getWishlistData()
  }

  getWishlistData()
  {
    this._WishlistService.getUserToWishList().subscribe({
      next:(response)=>{this.allWishListProduct = response.data; 
        this.isLoadingCart=false;
      },
      error:(err)=>{console.log(err)
        this.isLoadingCart=false
      }
    });
  }

  addToCart(id:string)
  {
    this._CartService.addCartItem(id).subscribe({
      next:(response)=>{console.log(response);
        this._CartService.cartItemNum.next(response.numOfCartItems);
        this._ToastrService.info('successfully add to cart!', 'product Added!' , {
            closeButton:true,
            timeOut:3000
        });
      },
      error:(err)=>{console.log(err);
      }
    })
  }


    removeProductFromWishList(id:string)
    {
      this._WishlistService.removeProductFromWishList(id).subscribe({
        next:(response)=>{console.log(response),
          this._ToastrService.info('successfully add to cart!', 'product Added!' , {
            closeButton:true,
            timeOut:3000
        });
          this._WishlistService.wishlistProductId.next(response.data)
          this.getWishlistData()
        },
        error:(err)=>{console.log(err)}
      })
    }
}
