import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyResetCodeComponent } from './components/verify-reset-code/verify-reset-code.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { authGuard } from './Guard/auth.guard';
import { noAuthGuard } from './Guard/no-auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { BrandsProductComponent } from './components/brands-product/brands-product.component';
import { WishListComponent } from './components/wish-list/wish-list.component';




const routes: Routes = [
  {path:'' ,redirectTo:'home' ,pathMatch:'full'},
  {path:'home',canActivate:[authGuard] ,component:HomeComponent},
  {path:'cart',canActivate:[authGuard] ,component:CartComponent},
  {path:'products',canActivate:[authGuard] ,component:ProductsComponent},
  {path:'categories',canActivate:[authGuard] ,component:CategoriesComponent},
  {path:'brands',canActivate:[authGuard] ,component:BrandsComponent},
  {path:'brands/:id',canActivate:[authGuard] ,component:BrandsProductComponent},
  {path:'ShippingAddress/:id',canActivate:[authGuard] ,component:ShippingAddressComponent},
  {path:'allorders',canActivate:[authGuard] ,component:OrdersComponent},
  {path:'product/category/:id',canActivate:[authGuard] ,component:CategoryProductComponent},
  {path:'product/:id',canActivate:[authGuard] ,component:ProductDetailsComponent},
  {path:'wishlist',canActivate:[authGuard] ,component:WishListComponent},

  {path:'login',canActivate:[noAuthGuard],component:LoginComponent},
  {path:'register',canActivate:[noAuthGuard],component:RegisterComponent},
  {path:'reset-password',canActivate:[noAuthGuard],component:ResetPasswordComponent},
  {path:'verify-reset-code',canActivate:[noAuthGuard],component:VerifyResetCodeComponent},
  {path:'forget-password',canActivate:[noAuthGuard],component:ForgetPasswordComponent},
  {path:'**' ,component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
