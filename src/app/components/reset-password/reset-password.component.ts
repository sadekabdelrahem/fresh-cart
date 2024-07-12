import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){}

  apiErrorMassage:string="";

  isLoading:boolean=false;

  resetPasswordForm:FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    newPassword:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z].{5,}$/)])
  })

  handelResetPassword(form:FormGroup)
  {
    this.isLoading=true
    this._AuthService.resetPassword(form.value).subscribe({
      next:(response)=>{console.log(response),
        this._Router.navigate(["/login"]),
        this.isLoading=false
      },
      error:(err)=>{console.log(err)
        this.apiErrorMassage = err.error.message,
        this.isLoading=false
      }
    })

  }

}
