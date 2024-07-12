import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {


  ShippingAddressForm:FormGroup = new FormGroup ({
    details: new FormControl(null , Validators.required),
    phone: new FormControl(null , [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl(null , Validators.required)
  })

  constructor(private _CartService:CartService , private _ActivatedRoute:ActivatedRoute){}

  cartId:string|null=''
  isLoading=false;

  ngOnInit(): void {
    this.isLoading=true
    this._ActivatedRoute.paramMap.subscribe((params)=>{this.cartId = params.get("id");
      this.isLoading=false
    })
  }

  redirectToPaymentPage(url:string)
  
  {
    window.location.href = url;
  }

  handelShippingAddress(form:FormGroup)
  {
    this.isLoading=true
    console.log(form.value)
    this._CartService.onlinePayment(this.cartId , form.value).subscribe({
      next:(response)=>{console.log(response),
        this.isLoading=false;
        this.redirectToPaymentPage(response.session.url)
      },
      error:(err)=>{console.log(err);
        this.isLoading=false;
      }
    })
  }

}

