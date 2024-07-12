import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ibrand } from 'src/app/interfaces/ibrand';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands-product',
  templateUrl: './brands-product.component.html',
  styleUrls: ['./brands-product.component.css']
})
export class BrandsProductComponent implements OnInit{

  constructor(private _BrandService:BrandService , private _ActivatedRoute:ActivatedRoute){}
isLoading:boolean=false
allProducts:Iproduct[]=[];
brandId:string|null="";
  ngOnInit(): void {
    this.isLoading=true

    this._ActivatedRoute.paramMap.subscribe((params)=>{this.brandId= params.get("id");
    if(this.brandId)
    {
      this._BrandService.getProductByBrand(this.brandId).subscribe({
        next:(response)=>{
          this.allProducts = response.data ;
        },
        error:(err)=>{console.log(err)}
      })
    }
  })
    
  }

}
