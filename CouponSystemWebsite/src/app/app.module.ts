import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AddCouponComponent } from './components/ComanyFunctions/add-coupon/add-coupon.component';
import { UpdateCouponComponent } from './components/ComanyFunctions/update-coupon/update-coupon.component';
import { DeleteCouponComponent } from './components/ComanyFunctions/delete-coupon/delete-coupon.component';
import { AddCompanyComponent } from './components/AdminFunctions/add-company/add-company.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyAreaComponent } from './components/company-area/company-area.component';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorService } from './services/http-interceptor.service';
import { ListFilterCompanyPipe } from './pipes/list-filter-company.pipe';
import { ListFilterCustomerPipe } from './pipes/list-filter-customer.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsService } from './services/products.service';


@NgModule({
  declarations: [
    AddCouponComponent,
    UpdateCouponComponent,
    DeleteCouponComponent,
   
    AddCompanyComponent,
    
   
    
    
   
   
    
    
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    CompanyAreaComponent,
    AdminAreaComponent,
    
    PageNotFoundComponent,
    ListFilterCompanyPipe,
    ListFilterCustomerPipe,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    ListFilterCompanyPipe,
    ListFilterCustomerPipe,
    ProductsService
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
