import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountAddComponent } from 'src/app/component/account/account-add/account-add.component';
import { AccountsTableComponent } from 'src/app/component/account/accounts-table/accounts-table.component';
import { Account } from 'src/app/domain/account/account';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-account-administration-page',
  templateUrl: './account-administration-page.component.html',
  styleUrls: ['./account-administration-page.component.css'],
  standalone: true,
  imports: [AccountsTableComponent, AccountAddComponent]
})
export class AccountAdministrationPageComponent implements OnInit {

  accounts?: Account[]
  selectedAccount?: Account
  @ViewChild(AccountsTableComponent) accountsTableComponent!: AccountsTableComponent
  @ViewChild(AccountAddComponent) accountAddComponent!: AccountAddComponent

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
      this.accountService.findAll().subscribe(response => {
        this.accounts = response._embedded['accounts']
      })
  }
  newAccountEvent(): void {
    if(this.accountsTableComponent) {
      this.accountsTableComponent.loadData()
    }
  }
  editAccountEvent(account: Account): void {
    if(this.accountAddComponent){
      this.accountAddComponent.setAccount(account)
      this.accountAddComponent.open()
    }
  }
}
