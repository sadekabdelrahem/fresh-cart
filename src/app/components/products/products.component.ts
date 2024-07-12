import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _ProductService:ProductService){}

  allProduct:Iproduct[] = [];
  searchItems:string=''
  isLoading:boolean=false;

  ngOnInit()
  {
    this.isLoading=true
    this._ProductService.getAllProductToProducts().subscribe({
      next:(Response)=>{console.log(Response);
        this.isLoading=false
        this.allProduct = Response.data
      },
      error:(err)=>{console.log(err);
        this.isLoading=false
      }
    })

  }

}
