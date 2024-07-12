import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService ,private _Router:Router){}


  apiErrorMassage:string="";
  isLoading:boolean=false

  loginForm:FormGroup = new FormGroup ({

  email:new FormControl(null ,[Validators.required , Validators.email]),
  password:new FormControl(null , [Validators.required, Validators.pattern(/^[A-z].{5,}$/)])

})



  handelLogin(loginForm:FormGroup)
  {
    if(this.loginForm.valid)
      {
        this.isLoading=true
        this._AuthService.login(loginForm.value).subscribe({
        next:(response)=>{this._Router.navigate(['/home']);
        localStorage.setItem('token' ,response.token);
        this._AuthService.isLoggedIn.next(true)
        this.isLoading=false},

        error:(err)=>{
        this.apiErrorMassage = err.error.message;
        console.log(this.apiErrorMassage)
        this.isLoading=false
      }
      })
    }
  }

}
