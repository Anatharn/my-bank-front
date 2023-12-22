import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountLine } from 'src/app/domain/account/account-line';
import { MatIconModule } from '@angular/material/icon';
import { AccountLineAddComponent } from '../../../component/account/account-line-add/account-line-add.component';
import { ActivatedRoute, Route, Router, RouterState } from '@angular/router';
import { Account } from 'src/app/domain/account/account';
import { AccountService } from 'src/app/service/account.service';
import { AccountLinesTableComponent } from 'src/app/component/account/account-lines-table/account-lines-table.component';
import { AccountLinesUploadComponent } from 'src/app/component/account/account-lines-upload/account-lines-upload.component';
import { AccountSumComponent } from 'src/app/component/account/account-sum/account-sum.component';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
  standalone: true,
  imports: [AccountLineAddComponent, AccountLinesUploadComponent, AccountLinesTableComponent, AccountSumComponent, MatIconModule]
})
export class AccountDetailComponent implements OnInit{

  url!: string;
  account?: Account;

  constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.queryParamMap.subscribe(param => {
      let paramUrl = param.get('url') 
      if(paramUrl)
        this.url = paramUrl
      this.loadData();
    })
  }

  addAccountLine(accountLine: AccountLine){
    if(this.account){
      accountLine.account = this.account._links.self.href
      this.loadData();
    }
  }
  loadData(){
    this.accountService.findByUrl(this.url).subscribe(account => {
      this.account = account
    });
  }
}
