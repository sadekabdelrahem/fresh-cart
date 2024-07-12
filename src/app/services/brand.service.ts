import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _HttpClient:HttpClient) { }

  // getAllBrands(brandId:any):Observable<any>
  // {
  //   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`)
  // }

  getAllBrands():Observable<any>
  {
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")
  }

  getProductByBrand(brandId:string):Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`)

  }
}
