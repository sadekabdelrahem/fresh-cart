import { Component, Input, OnInit } from '@angular/core';
import { Ibrand } from 'src/app/interfaces/ibrand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{

  constructor(private _BrandService:BrandService){}

  brands:Ibrand[]=[];

  isLoading:boolean=false
  

  ngOnInit(): void {
    this.isLoading=true
    this._BrandService.getAllBrands().subscribe({
      next:(response)=>{console.log(response),
        this.brands = response.data;
        this.isLoading=false;
      },
      error:(err)=>{console.log(err);
        this.isLoading=false}
    })

    
  }
}
