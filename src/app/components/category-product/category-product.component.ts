import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {
  constructor(private _ProductService:ProductService , private _ActivatedRoute:ActivatedRoute , private _CartService:CartService , private _ToastrService:ToastrService){}

categoryId:string|null = "";
allProduct:Iproduct[]=[]
isLoading:boolean=false;

  ngOnInit(): void {
    this.isLoading=true

    this._ActivatedRoute.paramMap.subscribe((params)=>{this.categoryId = params.get("id");
    if(this.categoryId)
    {
      this._ProductService.getProductByCategory(this.categoryId).subscribe({
        next:(response)=>{
          this.isLoading=false;
          this.allProduct = response.data
        },
        error:(err)=>{console.log(err);
          this.isLoading=false;
        }          
      })

    }
  })
  }

  addToCart(id:any)
  {
    this.isLoading=true
    this._CartService.addCartItem(id).subscribe({
      next:(response)=>{console.log(response);
        this._CartService.cartItemNum.next(response.numOfCartItems);
        this.isLoading=false;
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

}
