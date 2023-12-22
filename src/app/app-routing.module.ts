import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AccountDetailComponent } from './page/account/account-detail/account-detail.component';
import { AdministrationPageComponent } from './page/administration/administration-page/administration-page.component';
import { AccountAdministrationPageComponent } from './page/administration/account-administration-page/account-administration-page.component';
import { BankAdministrationPageComponent } from './page/administration/bank-administration-page/bank-administration-page.component';
import { CategoryAdministrationPageComponent } from './page/administration/category-administration-page/category-administration-page.component';

const routes: Routes = [ 
  { path: "home", component: HomeComponent},
  { path: "account", component: AccountDetailComponent },
  { path: "administration", component: AdministrationPageComponent },
  { path: "administration/account", component: AccountAdministrationPageComponent },
  { path: "administration/bank", component: BankAdministrationPageComponent },
  { path: "administration/category", component: CategoryAdministrationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
