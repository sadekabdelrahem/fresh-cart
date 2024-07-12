import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _productService:ProductService){}

  allProduct:Iproduct[]=[];
  searchItem:string="";
  isLoadingHome:boolean= false;

  ngOnInit()
  {
    this.isLoadingHome = true
    this._productService.getAllProduct().subscribe({
      next:(response)=>{console.log(response),
        this.allProduct = response.data ;
        this.isLoadingHome =false
      },
      
      error:(err)=>{console.log(err)
        this.isLoadingHome = false
      }
    })
    
  }

}
