import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProduct():Observable<any>
  {
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/products")
  }

  getProductById(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  getAllCategories():Observable<any>
  {
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")
  }

  getProductByCategory(categoryId:string):Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`)
  }

  getAllProductToProducts():Observable<any>
  {
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/products")
  }
}
