import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ServicesService} from './services.service';
import {HttpClientModule} from '@angular/common/http';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {HomePageService} from './home-page/home-page.service';
import {ProductDetailsService} from './product-details/product-details.service';
import {AuthenticationService} from './authentication.service';
import {AppService} from './app.service';
import {FormsModule} from '@angular/forms';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AddProductComponent } from './add-product/add-product.component';
import {MyProfileService} from './my-profile/my-profile.service';
import { ViewUsersComponent } from './view-users/view-users.component';
import {ViewUsersService} from './view-users/view-users.service';
import {SignUpService} from './sign-up/sign-up.service';
import {HttpService} from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    NavBarComponent,
    ProductDetailsComponent,
    ProductListComponent,
    SignUpComponent,
    UserCartComponent,
    MyProfileComponent,
    OrderHistoryComponent,
    AddProductComponent,
    ViewUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HomePageService, ProductDetailsService, AuthenticationService, AppService, MyProfileService, ViewUsersService, SignUpService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
