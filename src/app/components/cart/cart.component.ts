import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _CartService:CartService){}

  cartDetails?:any;
  isLoadingCart:boolean = false;

  ngOnInit(): void {
    this.isLoadingCart=true
    this._CartService.getUserCart().subscribe({
      next:(response)=>{this.cartDetails = response.data;
        this.isLoadingCart=false;
      },
      error:(err)=>{console.log(err);
        this.isLoadingCart = false;
      }
    })
  }
  removeCartItem(id:string)
  {
    this.isLoadingCart=true
    this._CartService.removeCartItem(id).subscribe({
      next:(response)=>{
        this.cartDetails = response.data;
        this._CartService.cartItemNum.next(response.numOfCartItems);
        this.isLoadingCart=false;
      },
      error:(err)=>{console.log(err);
        this.isLoadingCart = false;
      }
    })
  }

  updateCartItem(id:string,count:number)
  {
    this.isLoadingCart=true
    this._CartService.updateCartItem(id,count).subscribe({
      next:(response)=>{this.cartDetails = response.data;
        this.isLoadingCart=false
      },
      error:(err)=>{console.log(err);
        this.isLoadingCart = false
      }
    })
  }
}
