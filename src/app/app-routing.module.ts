import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AccountDetailComponent } from './page/account/account-detail/account-detail.component';
import { AccountLineAddComponent } from './component/account/account-line-add/account-line-add.component';

const routes: Routes = [ 
  { path: "home", component: HomeComponent},
  { path: "account", component: AccountDetailComponent },
  { path: "addAccount", component: AccountLineAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
