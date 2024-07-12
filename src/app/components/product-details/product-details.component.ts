import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  constructor(private _ActivatedRoute:ActivatedRoute , private ProductService:ProductService,private _CartService:CartService , private _ToastrService:ToastrService){}
  isLoadingProduct:boolean = false
  productId?:string|null=null;
  productDetails?:Iproduct;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{this.productId = params.get("id")})

      if(this.productId!=null)
      {
        this.isLoadingProduct=true
        this.ProductService.getProductById(this.productId).subscribe({
          next:(response)=>{this.productDetails = response.data
            console.log(this.productDetails);
          this.isLoadingProduct =false},
          error:(err)=>{console.log(err)
            this.isLoadingProduct=false
          }
        })
      }
  }

  addToCart(id:any)
  {
    this.isLoadingProduct = true
    this._CartService.addCartItem(id).subscribe({
      next:(response)=>{console.log(response);
        this.isLoadingProduct = false;
        this._CartService.cartItemNum.next(response.numOfCartItems);
        this._ToastrService.info('successfully add to cart!', 'product Added!' , {
            closeButton:true,
            timeOut:3000
        });

      },
      error:(err)=>{console.log(err);
        this.isLoadingProduct = false;
      }
    })
  }

}
