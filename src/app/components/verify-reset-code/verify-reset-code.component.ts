import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-reset-code',
  templateUrl: './verify-reset-code.component.html',
  styleUrls: ['./verify-reset-code.component.css']
})
export class VerifyResetCodeComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){}

  apiErrorMassage:string="";

  isLoading:boolean=false ;


  verifyResetCode:FormGroup = new FormGroup({
    resetCode:new FormControl(null , [Validators.required])
  })

handleVerifyCode(form:FormGroup)
{
  this.isLoading=true
  this._AuthService.verifyResetCode(form.value).subscribe({
    next:(response)=>{console.log(response),
    this._Router.navigate(['/reset-password']),
    this.isLoading = false
    },
    error:(err)=>{console.log(err),
      this.apiErrorMassage = err.error.message ,
      this.isLoading = false
    }
  })

}

}
