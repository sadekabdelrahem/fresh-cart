import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedUser:boolean=false

  numOfCartItem:number = 0;

  constructor(private _AuthService:AuthService , private _CartService:CartService){}

  logout()
    {
      this._AuthService.logout()

      this._AuthService.isLoggedIn
    }

    ngOnInit(){

      this._AuthService.isLoggedIn.subscribe((isLogged)=>{this.isLoggedUser = isLogged}),
      this._CartService.cartItemNum.subscribe({
        next:(nums)=>{this.numOfCartItem = nums}
      }) 
    }

}


