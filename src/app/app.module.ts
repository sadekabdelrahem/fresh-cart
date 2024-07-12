import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { VerifyResetCodeComponent } from './components/verify-reset-code/verify-reset-code.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component'
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomeMainSliderComponent } from './components/home-main-slider/home-main-slider.component';
import { HomeCategoriesSliderComponent } from './components/home-categories-slider/home-categories-slider.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddEgpPipe } from './components/pipes/add-egp.pipe';
import { TitleSlicePipe } from './components/pipes/title-slice.pipe';
import { SearchPipe } from './components/pipes/search.pipe';
import { SharedSpinnerComponent } from './components/shared-spinner/shared-spinner.component';
import { ToastrModule } from 'ngx-toastr';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { BrandCategoryComponent } from './components/brand-category/brand-category.component';
import { BrandsProductComponent } from './components/brands-product/brands-product.component';
import { WishListComponent } from './components/wish-list/wish-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    VerifyResetCodeComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    ProductComponent,
    ProductDetailsComponent,
    HomeMainSliderComponent,
    HomeCategoriesSliderComponent,
    ShippingAddressComponent,
    OrdersComponent,
    AddEgpPipe,
    TitleSlicePipe,
    SearchPipe,
    SharedSpinnerComponent,
    CategoryProductComponent,
    BrandCategoryComponent,
    BrandsProductComponent,
    WishListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
