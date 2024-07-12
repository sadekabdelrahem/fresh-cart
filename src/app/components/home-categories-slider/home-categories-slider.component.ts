import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Icategory } from 'src/app/interfaces/icategory';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-categories-slider',
  templateUrl: './home-categories-slider.component.html',
  styleUrls: ['./home-categories-slider.component.css']
})
export class HomeCategoriesSliderComponent implements OnInit{

  isLoading:boolean=false;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: false,
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
        items: 7
      }
    },
    nav: true
  }

  constructor(private _ProductService:ProductService){}

  allCategories:Icategory[]=[];

  ngOnInit(): void {
    this.isLoading=true
    this._ProductService.getAllCategories().subscribe({
      next:(response)=>{this.allCategories = response.data ;
        this.isLoading = false
      },
      error:(err)=>{console.log(err);
        this.isLoading=false;
      }
    })
    
  }


}
