import { Component } from '@angular/core';
import { FormControl ,  FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { matchPassword } from 'src/app/custom Validation/match-password';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}

  apiErrorMassage:string="";

  isLoading=false ;
  registerForm:FormGroup = new FormGroup({
    name:new FormControl(null , [Validators.required ,Validators.minLength(3) ,Validators.maxLength(20)]),
    email:new FormControl(null , [Validators.required ,Validators.email]),
    password:new FormControl(null , [Validators.required ,Validators.pattern(/^[A-Z].{5,}$/)]),
    rePassword:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z].{5,}$/)]),
    phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
  },{validators:matchPassword} )

handelRegister(regForm:FormGroup)
{
  if(this.registerForm .valid){
    this.isLoading=true
    this._AuthService.register(regForm.value).subscribe({
      next:(response)=>{console.log(response);
        this._Router.navigate(['/login'])
        this.isLoading=false},
        
      error:(err)=>{
        this.apiErrorMassage = err.error.message ;
        console.log(this.apiErrorMassage);
        this.isLoading=false
      }
    })
  }
}

}
