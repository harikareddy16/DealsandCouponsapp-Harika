import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyAreaComponent } from './components/company-area/company-area.component';
import { AddCompanyComponent } from './components/AdminFunctions/add-company/add-company.component';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpdateCouponComponent } from './components/ComanyFunctions/update-coupon/update-coupon.component';
import { DeleteCouponComponent } from './components/ComanyFunctions/delete-coupon/delete-coupon.component';
import { AddCouponComponent } from './components/ComanyFunctions/add-coupon/add-coupon.component';
import { CompanyAuthGuardService } from './services/company-auth-guard.service';
import { CustomerAuthGuardService } from './services/customer-auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },

  {
    path: "company", component: CompanyAreaComponent, canActivate: [CompanyAuthGuardService], children: [
      { path: '', redirectTo: "viewAllCoupons", pathMatch: 'full' },
      { path: "createCoupon", component: AddCouponComponent },
      { path: "updateCoupon", component: UpdateCouponComponent },
      { path: "deleteCoupon", component: DeleteCouponComponent },
     
      { path: "**", redirectTo: "viewAllCoupons", pathMatch: 'full' }
    ]
  },

  
  {
    path: "admin", component: AdminAreaComponent, canActivate: [AdminAuthGuardService], children: [
      { path: '', redirectTo: "viewAllCompanies", pathMatch: 'full' },
      { path: "createCompany", component: AddCompanyComponent },
      
     
     
      { path: '**', redirectTo: "viewAllCompanies", pathMatch: 'full' }
    ]
  },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
