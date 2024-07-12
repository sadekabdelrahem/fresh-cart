import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/interfaces/icategory';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

constructor(private _ProductService:ProductService){}

categories:Icategory[] = []
isLoading:boolean=false;


  ngOnInit(): void {
    this.isLoading=true;
    this._ProductService.getAllCategories().subscribe({

      next:(response)=>{this.categories = response.data;
        this.isLoading=false
      },
      error:(err)=>{console.log(err);
        this.isLoading=false
      }
    })
    
  }

}
