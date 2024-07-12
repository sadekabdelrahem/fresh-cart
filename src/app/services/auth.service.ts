import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = new BehaviorSubject<boolean>(localStorage.getItem('token')?true:false)

  constructor(private _HttpClient:HttpClient , private _Router:Router) { }

  register(regForm:object):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , regForm)
  }


  login(loginForm:object):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , loginForm)
  }

  logout()
  {
    localStorage.removeItem('token')

    this._Router.navigate(['/login'])

    this.isLoggedIn.next(false)
  }

  

  forgetPassword(forgetPassword:object):Observable<any>
  {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords" , forgetPassword)
  }

  verifyResetCode(verifyResetCode:object):Observable<any>
  {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode" , verifyResetCode)
  }

  resetPassword(verifyResetCode:object):Observable<any>
  {
    return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword" , verifyResetCode)
  }

}
